import React, { Component, Fragment } from 'react'
import TodoItem from './TodoItem'
class TodoList_1 extends Component {
	//Todolist的构造函数
	constructor(props) {
		super(props)//super是父类的构造函数，需要先调用一次
		this.state = {//react数据要定义在状态里面
			//输入框接受的内容
			InputValue: 'Hello',
			//列表中的每一项
			list: ['Faker', 'Bang']
		}
	}
	// 一个组件类必须要实现一个 render 方法，
	// 这个 render 方法必须要返回一个 JSX 元素
	render() {
		return (
			<Fragment>
				{/* 什么 */}
				{
					// 要在JSX中使用JS脚本,需添加大括号
				}
				<label htmlFor="A">聚焦到输入框</label>
				<input
					// 将value值与状态当中数据进行绑定
					value={this.state.InputValue}
					id="A"
					// 事件绑定,语法是将HTML中的事件语句变为大写.
					// 如果没有事件绑定
					// 同时应该改变类函数的this指向
					onChange={this.handleInputChange.bind(this)}
				/>
				{
					// 添加按钮事件
					// array.map(function(currentValue,index,arr), thisValue)
					// currentValue	必须。当前元素的值
					// index	可选。当前元素的索引值
					// arr	可选。当前元素属于的数组对象
				}
				<button onClick={this.handleBtnClick.bind(this)}>Go</button>
				<ul>
					{
						this.state.list.map((item, index) => {
							return (
								<div>
									<TodoItem content={item} keys={index} delete={this.handleItemDelete.bind(this)}/>
									{
										/*<li
										key={index}
										// 通过bind想事件函数中传递数据
										onClick={this.handleItemDelete.bind(this, index)}
										dangerouslySetInnerHTML={{__html:item}}
									>
									</li>*/
									}
								</div>
							)
						})
					}
				</ul>
			</Fragment >
		)
	}
	handleInputChange(e) {
		// 错误,不能通过引用的方式改变数据的值
		// this.state.InputValue = e.target.value
		// 只能通过setState方法才能改变数据
		this.setState({
			InputValue: e.target.value
		})
	}
	handleBtnClick() {
		this.setState({
			//展开运算符
			list: [...this.state.list, this.state.InputValue],
			InputValue: ''
		})
	}
	handleItemDelete(index) {
		// this.setState({
		// 	list: [...this.state.list].splice(index, 1)
		// })

		// 禁止在setState函数中操纵数据
		const list = [...this.state.list]
		list.splice(index, 1)
		this.setState({
			list: list
		})
		console.log(index)
	}
}
//最后需要将改组件导出
export default TodoList_1