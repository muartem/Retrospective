import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { Date, Done, Del, Edit, Header, Input, Max, Min, Ratio, StyledTask, Title } from './Task.style'

export default class Task extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			edit: false,
			input: ''
		}

		this.enterHandle = this.enterHandle.bind(this)
		this.onInputT = this.onInputT.bind(this)
		this.editSwitch = this.editSwitch.bind(this)
		this.editTaskName = this.editTaskName.bind(this)
	}

	onInputT(e) {
		this.setState(state => ({
			...state,
			input: e.target.value
		}))
	}

	editSwitch() {
		this.setState(state => ({
			...state,
			edit: !state.edit,
			input: this.props.title
		}))
	}

	editTaskName() {
		const { input } = this.state
		const { date, editTask } = this.props
		if (!input) return
		editTask(input, date)
		this.setState(state => ({
			...state,
			edit: false,
			input: ''
		}))
	}

	enterHandle(e) {
		if (e.key === 'Enter') {
			this.editTaskName()
		}
	}

	dragStart = (e) => {
		setTimeout(() => {
			e.target.classList.add('hidden')
		}, 0)
		this.props.getDropId(e.target.id)
	}

	dragEnd = (e) => {
		e.target.classList.remove('hidden')
	}


	render() {
		const { title, ratio, date, editRatio, deleteTask } = this.props
		const { edit, input } = this.state
		const { editSwitch, onInputT, editTaskName, enterHandle, dragEnd, dragStart } = this

		return (
			<StyledTask
				id={date}
				data-board={title}
				draggable='true'
				onDragStart={(e) => dragStart(e)}
				onDragEnd={(e) => dragEnd(e)}
			>
				<Header>
					<Title hidden={edit}>{title}</Title>
					<Input
						autoFocus
						onKeyPress={(e) => enterHandle(e)}
						hidden={!edit}
						onInput={(e) => onInputT(e)}
						value={input}
						type='text'
					/>
					<Edit hidden={edit} onClick={editSwitch}>&#10000;</Edit>
					<Done hidden={!edit} onClick={() => editTaskName()}>&#10004;</Done>
					<Del hidden={!edit} onClick={() => deleteTask(date)}>&#10008;</Del>
				</Header>
				<Date>{moment(date).local().calendar()}</Date>
				<Ratio>
					<Min onClick={() => editRatio(ratio - 1, date)}>-</Min>
					<div>{ratio}</div>
					<Max onClick={() => editRatio(ratio + 1, date)}>+</Max>
				</Ratio>
			</StyledTask>
		)
	}

}

Task.propTypes = {
	title: PropTypes.string.isRequired,
	ratio: PropTypes.number.isRequired,
	date: PropTypes.any.isRequired,
	board: PropTypes.string.isRequired,
	editRatio: PropTypes.func.isRequired,
	editTask: PropTypes.func.isRequired,
	deleteTask: PropTypes.func.isRequired,
	getDropId: PropTypes.func.isRequired
}
