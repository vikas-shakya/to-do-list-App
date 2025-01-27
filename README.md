# To-Do List App

A simple and efficient To-Do List application built using HTML, CSS, and JavaScript. This app allows users to add, delete, and mark tasks as completed while storing tasks in Local Storage.

## Features

✅ Add new tasks to the list  
✅ Delete tasks from the list  
✅ Mark tasks as completed  
✅ Tasks persist even after page reload using Local Storage  

## Technologies Used

- HTML
- CSS
- JavaScript
- Local Storage

## How It Works

1. **Adding a Task:** Enter a task in the input field and click the 'Add Task' button.
2. **Deleting a Task:** Click the 'Delete' button next to a task to remove it.
3. **Marking as Completed:** Click on a task to toggle the completed state.
4. **Persistent Storage:** Tasks are saved in Local Storage and reloaded when the page is refreshed.

## Installation & Setup

1. Clone this repository:
   ```sh
   git clone https://github.com/vikas-shakya/todo-list-app.git
   ```
2. Open the `index.html` file in a browser.

## Code Explanation

- **Loading Tasks from Local Storage:** When the page loads, saved tasks are retrieved from Local Storage and displayed.
- **Adding a Task:** New tasks are added to the DOM and stored in Local Storage.
- **Deleting a Task:** Clicking the delete button removes the task from the DOM and Local Storage.
- **Toggling Completion Status:** Clicking a task toggles a `completed` class for styling.

## Future Enhancements

🚀 Edit tasks directly in the list  
🚀 Add a due date feature  
🚀 Implement drag-and-drop sorting  
🚀 Dark mode toggle  

## License

This project is licensed under the MIT License.

## Contributing

Feel free to submit issues or pull requests to improve the app!

---

Enjoy using the To-Do List App! 🎯
