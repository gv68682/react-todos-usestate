function App(){

    const [todos, setTodos] = React.useState([
            {
                text: "React State Example",
                isCompleted: false
            },
            {  
                 text: "Create State with useState Hook",
                 isCompleted: false
            },
            {   
                text: "Use JSX to Add Elements ",
                isCompleted: false
            },
            {   
                text: "Add Remove Button to Delete Todos",
                isCompleted: false
            } 
        ]
    )
    const [value, setValue] = React.useState('')
    const handleSubmit= (e) => {
        e.preventDefault()
        if(!value) return
        let newToDo =  [...todos, {text:value, isCompleted:false}];
        setTodos(newToDo)
        setValue('')
    }
    const todoDelete=(e)=>{
        let index = Number(e.target.id)
        let temp = [...todos];    
        temp.splice(index, 1);
        setTodos(temp);
    }
    return(
        <>
        <div className="todo-list">
            {todos.map((item, index) => <div  className = "todo" key = {index}>{item.text}    <button id = {index} onClick={todoDelete}> Remove </button></div> )}
        </div>
            <form onSubmit={handleSubmit}>
                 <input 
                    type="text"
                    className="input"
                    value={value}
                    placeholder="Add Todo...and Press Enter"
                    onChange={e => setValue(e.target.value)} />
            </form>
        </>
    )
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
  );