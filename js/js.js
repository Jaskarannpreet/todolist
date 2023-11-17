// let list = document.getElementsByTagName('li')
			// 			let listid = 'li' + list.length
			// 			function todo() {
			// 				let a = document.getElementById('add').value
			// 				if (a == '') {
			// 					alert('Please enter a valid todo list')
			// 				} else {
			// 					let list = document.getElementsByTagName('li')
			// 					let listid = 'li' + list.length
			// 					console.log(listid)

			// 					document.getElementById('add').value = ''
			// 					document.getElementById('show').innerHTML +=
			// 						'<li class="listyle" id = ' +
			// 						listid +
			// 						' value = ' +
			// 						listid +
			// 						' name = "getit" >' +
			// 						a +
			// 						'<button type="button" id="btn" class="strikebtn todobtn"><i class="fa-solid fa-check"></i></button>' +
			// 						'<button type="button"  class="removebtn todobtn"><i class="fa-solid fa-xmark"></i></button>' +
			// 						'</li>'
			// 				}
			// 			}

			document.addEventListener('DOMContentLoaded', function () {
				// const taskInput = document.getElementById('taskInput')
				// const addButton = document.getElementById('addButton')
				// const taskList = document.getElementById('taskList')

				addButton.addEventListener('click', function () {
					const taskText = taskInput.value.trim()
					// console.log(taskText)
					if (taskText == '') {
						document.getElementById('taskInput').style.border = '3px solid red'
					} else {
						if (taskText == taskText) {
							document.getElementById('taskInput').style.border = 'none'
						}
						const taskItem = document.createElement('li')
						taskItem.innerHTML = `
                        <div class="box"
					  <span class="listyle">${taskText}</span>
					  <button type="button" class="strikebtn todobtn"><i class="fa-solid fa-check"></i></button>
			                   <button type="button" class="removebtn todobtn"><i class="fa-solid fa-xmark"></i></button></div>
					`

						// taskList.appendChild(taskItem)
						taskList.insertBefore(taskItem, taskList.firstChild)
						taskInput.value = ''
					}
				})

				// taskList.addEventListener('click', function (e) {
				// 	if (e.target.classList.contains('strikebtn')) {
				// 		e.target.parentElement.classList.toggle('strike')
				// 	}
				// })
				// taskList.addEventListener('click', function (f) {
				// 	if (f.target.classList.contains('removebtn')) {
				// 		f.target.parentElement.remove()
				// 	}
				// })

				taskList.addEventListener('click', function (f) {
					if (f.target.classList.contains('strikebtn')) {
						f.target.parentElement.classList.toggle('strike')
					}
					if (f.target.classList.contains('removebtn')) {
						f.target.parentElement.remove()
					}
				})
			})