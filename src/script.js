// document.getElementById('addTaskButton').addEventListener('click', function () {
//     const taskInput = document.getElementById('taskInput');
//     const deadlineInput = document.getElementById('deadlineInput');
//     const notesInput = document.getElementById('notesInput');
//     const taskList = document.getElementById('taskList');

//     const taskText = taskInput.value.trim();
//     const deadline = deadlineInput.value;
//     const notes = notesInput.value.trim();

//     if (!taskText) {
//         alert('Please enter a task.');
//         return;
//     }


//     const li = document.createElement('li');
//     li.innerHTML = `
//         <span>${taskText}</span>
//         <div class="task-details">
//             ${deadline ? `<strong>Deadline:</strong> ${deadline}` : ''}
//             ${notes ? `<br><strong>Notes:</strong> ${notes}` : ''}
//         </div>
//         <div>
//             <button class="complete">Complete</button>
//             <button class="cancel">Delete</button>
//         </div>
//     `;

//     li.querySelector('.complete').addEventListener('click', function () {
//         li.classList.toggle('completed');
//     });

//     li.querySelector('.cancel').addEventListener('click', function () {
//         taskList.removeChild(li);
//     });

//     taskList.appendChild(li);

//     // Clear inputs
//     taskInput.value = '';
//     deadlineInput.value = '';
//     notesInput.value = '';
// });

// document.getElementById('addTaskButton').addEventListener('click', function () {
//     const taskInput = document.getElementById('taskInput');
//     const deadlineInput = document.getElementById('deadlineInput');
//     const notesInput = document.getElementById('notesInput');
//     const taskList = document.getElementById('taskList');

//     const taskText = taskInput.value.trim();
//     const deadline = deadlineInput.value;
//     const notes = notesInput.value.trim();

//     if (!taskText) {
//         alert('Please enter a task.');
//         return;
//     }

//     const li = document.createElement('li');
//     li.innerHTML = `
//         <span>${taskText}</span>
//         <div class="task-details">
//             ${deadline ? `<strong>Deadline:</strong> ${deadline}` : ''}
//             ${notes ? `<br><strong>Notes:</strong> ${notes}` : ''}
//         </div>
//         <div>
//             <button class="complete">Complete</button>
//             <button class="cancel">Delete</button>
//         </div>
//     `;

//     li.querySelector('.complete').addEventListener('click', function () {
//         li.classList.toggle('completed');
//         if (li.classList.contains('completed')) {
//             alert('Great job! You completed the task: ' + taskText);
//         }
//     });

//     li.querySelector('.cancel').addEventListener('click', function () {
//         taskList.removeChild(li);
//     });

//     taskList.appendChild(li);

//     // Clear inputs
//     taskInput.value = '';
//     deadlineInput.value = '';
//     notesInput.value = '';
// });

// document.getElementById('addTaskButton').addEventListener('click', function () {
//     const taskInput = document.getElementById('taskInput');
//     const deadlineInput = document.getElementById('deadlineInput');
//     const notesInput = document.getElementById('notesInput');
//     const taskList = document.getElementById('taskList');

//     const taskText = taskInput.value.trim();
//     const deadline = deadlineInput.value;
//     const notes = notesInput.value.trim();

//     if (!taskText) {
//         alert('Please enter a task.');
//         return;
//     }

//     const li = document.createElement('li');
//     li.innerHTML = `
//         <span>${taskText}</span>
//         <div class="task-details">
//             ${deadline ? `<strong>Deadline:</strong> ${deadline}` : ''}
//         </div>
//         ${notes ? `<div class="task-notes"><strong>Notes:</strong> ${notes}</div>` : ''}
//         <div>
//             <button class="complete">Complete</button>
//             <button class="cancel">Delete</button>
//         </div>
//     `;

//     li.dataset.deadline = deadline; // Store the deadline in a data attribute for later checks

//     li.querySelector('.complete').addEventListener('click', function () {
//         li.classList.toggle('completed');
//         if (li.classList.contains('completed')) {
//             alert('Great job! You completed the task: ' + taskText);
//         }
//     });

//     li.querySelector('.cancel').addEventListener('click', function () {
//         taskList.removeChild(li);
//     });

//     taskList.appendChild(li);

//     // Clear inputs
//     taskInput.value = '';
//     deadlineInput.value = '';
//     notesInput.value = '';
// });

// // Function to check deadlines
// function checkDeadlines() {
//     const taskList = document.getElementById('taskList');
//     const tasks = taskList.querySelectorAll('li');

//     const currentDate = new Date();

//     tasks.forEach(task => {
//         const deadline = task.dataset.deadline;
//         if (deadline) {
//             const deadlineDate = new Date(deadline);
//             const timeDifference = deadlineDate - currentDate;

//             // Check if the deadline is within 1 day (86400000 milliseconds)
//             if (timeDifference > 0 && timeDifference <= 86400000 && !task.classList.contains('completed')) {
//                 alert(`Reminder: The deadline for "${task.querySelector('span').textContent}" is near!`);
//             }
//         }
//     });
// }

// // Periodically check deadlines every hour
// setInterval(checkDeadlines, 3600000); // 3600000 ms = 1 hour

// document.getElementById('addTaskButton').addEventListener('click', function () {
//     const taskInput = document.getElementById('taskInput');
//     const deadlineDateInput = document.getElementById('deadlineDateInput');
//     const deadlineTimeInput = document.getElementById('deadlineTimeInput');
//     const notesInput = document.getElementById('notesInput');
//     const taskList = document.getElementById('taskList');

//     const taskText = taskInput.value.trim();
//     const deadlineDate = deadlineDateInput.value;
//     const deadlineTime = deadlineTimeInput.value;
//     const notes = notesInput.value.trim();

//     if (!taskText) {
//         alert('Please enter a task.');
//         return;
//     }

//     const deadline = deadlineDate && deadlineTime ? `${deadlineDate}T${deadlineTime}` : null;

//     const li = document.createElement('li');
//     li.innerHTML = `
//         <span>${taskText}</span>
//         <div class="task-details">
//             ${deadline ? `<strong>Deadline:</strong> ${deadlineDate} ${deadlineTime}` : ''}
//         </div>
//         ${notes ? `<div class="task-notes"><strong>Notes:</strong> ${notes}</div>` : ''}
//         <div>
//             <button class="complete">Complete</button>
//             <button class="cancel">Delete</button>
//         </div>
//     `;

//     li.dataset.deadline = deadline; // Store the deadline in a data attribute for later checks

//     li.querySelector('.complete').addEventListener('click', function () {
//         li.classList.toggle('completed');
//         if (li.classList.contains('completed')) {
//             alert('Great job! You completed the task: ' + taskText);
//         }
//     });

//     li.querySelector('.cancel').addEventListener('click', function () {
//         taskList.removeChild(li);
//     });

//     taskList.appendChild(li);

//     // Clear inputs
//     taskInput.value = '';
//     deadlineDateInput.value = '';
//     deadlineTimeInput.value = '';
//     notesInput.value = '';
// });

// // Function to check deadlines and highlight tasks
// function checkDeadlines() {
//     const taskList = document.getElementById('taskList');
//     const tasks = taskList.querySelectorAll('li');

//     const currentDate = new Date();

//     tasks.forEach(task => {
//         const deadline = task.dataset.deadline;
//         if (deadline) {
//             const deadlineDate = new Date(deadline);
//             const timeDifference = deadlineDate - currentDate;

//             // Check if the deadline is within 10 minutes (600000 milliseconds)
//             if (timeDifference > 0 && timeDifference <= 600000 && !task.classList.contains('completed')) {
//                 if (!task.classList.contains('task-near-deadline')) {
//                     alert(`Alert: The deadline for "${task.querySelector('span').textContent}" is within 10 minutes!`);
//                 }
//                 task.classList.add('task-near-deadline');
//             } else {
//                 task.classList.remove('task-near-deadline');
//             }
//         }
//     });
// }

// // Periodically check deadlines every minute
// setInterval(checkDeadlines, 60000); // 60000 ms = 1 minute

document.getElementById('addTaskButton').addEventListener('click', function () {
    const taskInput = document.getElementById('taskInput');
    const deadlineDateInput = document.getElementById('deadlineDateInput');
    const deadlineTimeInput = document.getElementById('deadlineTimeInput');
    const notesInput = document.getElementById('notesInput');
    const taskList = document.getElementById('taskList');

    const taskText = taskInput.value.trim();
    const deadlineDate = deadlineDateInput.value;
    const deadlineTime = deadlineTimeInput.value;
    const notes = notesInput.value.trim();

    if (!taskText) {
        alert('Please enter a task.');
        return;
    }

    const deadline = deadlineDate && deadlineTime ? `${deadlineDate}T${deadlineTime}` : null;

    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText}</span>
        <div class="task-details">
            ${deadline ? `<strong>Deadline:</strong> ${deadlineDate} ${deadlineTime}` : ''}
        </div>
        ${notes ? `<div class="task-notes"><strong>Notes:</strong> ${notes}</div>` : ''}
        <div>
            <button class="complete"><i class="fas fa-check"></i> Complete</button>
            <button class="cancel"><i class="fas fa-trash"></i> Delete</button>
        </div>
    `;

    li.dataset.deadline = deadline; // Store the deadline in a data attribute for later checks

    li.querySelector('.complete').addEventListener('click', function () {
        li.classList.toggle('completed');
        if (li.classList.contains('completed')) {
            alert('Great job! You completed the task: ' + taskText);
        }
    });

    li.querySelector('.cancel').addEventListener('click', function () {
        taskList.removeChild(li);
    });

    taskList.appendChild(li);

    // Clear inputs
    taskInput.value = '';
    deadlineDateInput.value = '';
    deadlineTimeInput.value = '';
    notesInput.value = '';
});