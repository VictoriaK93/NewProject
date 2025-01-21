function Lesson03() {
    return (
        <div>
            <h2>React Props children</h2>
            <p>Props используются для передачи данных от родительских компонентов дочерним компонентам. 
                Это один из основных механизмов передачи данных в React</p>
                <MyButton/>
                <MyButton/>
                <MyButton/>
                <UserCard name={'Bilbo Baggins'}
                age={45}/>
                <UserCard name={'Gendalf White'}
                age={2000}/>
        </div>
    )
}

export default Lesson03;