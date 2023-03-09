import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

type Props={
    name:string;
    desc:string;
    onDeleteClick:()=>void;
}
const ToDoListElement = ({name, desc, onDeleteClick}:Props) => {
    //const name=props.name;
    //const {name, desc} = props;
    return (
        <div style={{display:'flex', justifyContent: 'center'}}>
            <div><TextField id="outlined-basic" label="name" variant="outlined" value={name} /></div>
            <div><TextField id="outlined-basic" label="desc" variant="outlined" value={desc} /></div>
            <div> <Button sx={{color: 'black', borderColor: 'black', height: '100%'}} variant="outlined" onClick={()=> onDeleteClick()}> Удалить</Button></div>
        </div>

        // <div style={{display:'flex', gap:'1em'}}>
        //     <div>
        //         {name}
        //     </div>
        //
        //     <div>
        //         {desc}
        //     </div>
        //     <div>
        //         <button
        //             onClick={()=>onDeleteClick()}>
        //             Удалить</button>
        //     </div>
        // </div>
    );
};

export default ToDoListElement;