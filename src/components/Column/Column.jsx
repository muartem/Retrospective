import React from 'react'
import PropTypes from 'prop-types'
import Task from '../Task'
import {
	Add,
	AddBtn,
	ColorInput,
	Counter,
	Done,
	Edit,
	Header,
	Input,
	StyledColumn,
	TaskList,
	Title
} from './Column.style'


export default class Column extends React.Component {
	static dragID = ''

	static dropID = ''

	constructor(props) {
		super(props)
		this.state = {
			add: false,
			edit: false,
			input: '',
			color: this.props.color || '#FFFFFF22'
		}
		this.inputColor = this.state.color

		this.addSwitch = this.addSwitch.bind(this)
		this.onInputT = this.onInputT.bind(this)
		this.onInputC = this.onInputC.bind(this)
		this.onDrop = this.onDrop.bind(this)
		this.addTask = this.addTask.bind(this)
		this.enterHandle = this.enterHandle.bind(this)
		this.editSwitch = this.editSwitch.bind(this)
		this.editCat = this.editCat.bind(this)
	}

	onInputT(e) {
		this.setState(state => ({
			...state,
			input: e.target.value
		}))
	}

	onInputC(e) {
		this.inputColor = e.target.value
	}

	addSwitch() {
		this.setState(state => ({
			...state,
			add: !state.add,
			edit: false
		}))
	}

	editSwitch() {
		this.setState(state => ({
			...state,
			add: false,
			edit: !state.edit,
			input: this.props.title
		}))
	}

	addTask() {
		const { input } = this.state
		const { title, addNewTask } = this.props
		if (!input) return
		addNewTask(input, title)
		this.setState(state => ({
			...state,
			add: false,
			input: ''
		}))
	}

	editCat() {
		const { input } = this.state
		const { title, editCategory } = this.props
		if (!input) return
		if (input !== title) {
			editCategory(input, title)
		}

		this.setState(state => ({
			...state,
			edit: false,
			input: '',
			color: `${this.inputColor}22`
		}))
	}

	enterHandle(e, inputSwitch) {
		if (e.key === 'Enter') {
			switch (inputSwitch) {
				case 'E': {
					this.editCat()
					return
				}
				case 'A':
					this.addTask()
				// eslint-disable-next-line no-fallthrough
				default:
			}

		}
	}


	// eslint-disable-next-line class-methods-use-this
	dragOver(e) {
		e.preventDefault()
		if (e.target.classList.contains('column')) {
			e.target.style.border = 'dashed 2px gray'
			Column.dropID = e.target.id
		}
	}

	// eslint-disable-next-line class-methods-use-this
	dragLeave(e) {
		e.target.style.border = 'none'
	}

	onDrop(e) {
		e.target.style.border = 'none'
		this.props.changeCategory(Column.dropID, Column.dragID)
		Column.dragID = ''
	}

	getDropId = (id) => {
		Column.dragID = id
	}

	render() {
		const { addSwitch, colorI, onInputT, onInputC, addTask, editCat, enterHandle, editSwitch, getDropId } = this
		const { add, edit, input, color } = this.state
		const { title, items, editRatio, editTask, deleteTask } = this.props
		return (
			<StyledColumn color={color}
										className={'column'}
										id={title}
										onDragOver={(e) => this.dragOver(e)}
										onDragLeave={(e) => this.dragLeave(e)}
										onDrop={(e) => this.onDrop(e)}>
				<Header hidden={edit}>
					<Title>{title}</Title>
					<Counter> {items.length}</Counter>
					<Edit onClick={editSwitch}>&#10000;</Edit>
				</Header>

				<Header hidden={!edit}>
					<Title>
						<Input
							autoFocus
							type="text"
							onKeyPress={(e) => enterHandle(e, 'E')}
							onChange={(e) => onInputT(e)}
							value={input}
							maxLength="50" />
					</Title>
					<ColorInput value={colorI} type="color" onInput={(e) => onInputC(e)} />
					<Done onClick={editCat}>&#10004;</Done>
				</Header>

				<TaskList>
					{items.sort((a, b) => b.ratio - a.ratio).map(i =>
						<Task
							key={i.date}
							title={i.title}
							ratio={i.ratio}
							date={i.date}
							board={title}
							editRatio={editRatio}
							editTask={editTask}
							deleteTask={deleteTask}
							getDropId={getDropId}
						/>
					)}
				</TaskList>
				<Add hidden={add} onClick={addSwitch}>+</Add>
				<Add hidden={!add}>
					<Input type="text"
								 autoFocus
								 onKeyPress={(e) => enterHandle(e, 'A')}
								 onChange={(e) => onInputT(e)}
								 value={input}
								 maxLength="50" />
					<AddBtn onClick={addTask}>+</AddBtn>
				</Add>
			</StyledColumn>
		)
	}
}

Column.propTypes = {
	color: PropTypes.string,
	title: PropTypes.string.isRequired,
	items: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string.isRequired,
			date: PropTypes.any.isRequired,
			ratio: PropTypes.number.isRequired,
			category: PropTypes.string.isRequired
		})
	),
	editRatio: PropTypes.func.isRequired,
	editTask: PropTypes.func.isRequired,
	deleteTask: PropTypes.func.isRequired,
	addNewTask: PropTypes.func.isRequired,
	editCategory: PropTypes.func.isRequired,
	changeCategory: PropTypes.func.isRequired
}

Column.defaultProps = {
	color: '#ffffff22'
}
