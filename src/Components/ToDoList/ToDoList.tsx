import React, {useState} from 'react';
import ToDoListElement from "./ToDoListElement";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


type ListElement = {
    name: string,
    desc: string
}

const ToDoList = () => {

    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')

    const [list, setList] = useState<ListElement[]>([])


    const AddElement = () => {
        setList([...list, {
            name: name,
            desc: desc
        }])
        setDesc('')
        setName('')
    }

    const DeleteElement = (index:number)=>{
        const filtered = list.filter((el,i)=>i !== index)
        setList(filtered);
    }
    return (
        <div style={{display:'flex', flexDirection:'column', gap:'1em', marginTop:'1em'}}>
            <div>
                <TextField sx={{mardin: '0 1 em'}}id="standard-basic" label="name" variant="standard" value={name} onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div>
                <TextField id="standard-basic" label="desc" variant="standard" value={desc} onChange={(e)=>setDesc(e.target.value)}/>
            </div>
            <div>
                <Button variant="outlined"onClick={()=>AddElement()}>Добавить</Button>
            </div>

            {/*<input*/}
            {/*    type="text"*/}
            {/*    placeholder={"name"}*/}
            {/*    value={name}*/}
            {/*    onChange={(e) => setName(e.target.value)}*/}
            {/*/>*/}

            {/*<input*/}
            {/*    type="text"*/}
            {/*    placeholder={"description"}*/}
            {/*    value={desc}*/}
            {/*    onChange={(e) => setDesc(e.target.value)}*/}
            {/*/>*/}

            {/*<div>*/}
            {/*    <button onClick={() => AddElement()}>*/}
            {/*        Добавить в список*/}
            {/*    </button>*/}
            {/*</div>*/}
            {
                list.map((el, i) => <ToDoListElement
                    name={el.name}
                    desc={el.desc}
                    onDeleteClick={()=>DeleteElement(i)}
                    key={i}/>)
            }

        </div>
    );
};

export default ToDoList;