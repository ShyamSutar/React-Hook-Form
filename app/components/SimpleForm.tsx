"use client"

import { POST } from '@/_action'
import {FormEvent, useState} from 'react'

const SimpleForm = () => {

    const [data1, setData] = useState<any>()

    
        async function action (data: FormData){

            const name  = data.get('name');
            const message  = data.get('message');

            const data1 =  await POST({name: name, message: message})
            setData(data1);
            console.log(data1, "ye hai");
            
        }
    

  return (
    <div className='flex gap-6'>
        <form className='flex flex-1 flex-col gap-4 sm:w-1/2' action={action}>
            <input className='rounded-lg border-black border-2 p-2' name='name' placeholder='name' required type="text" />
            <input className='rounded-lg border-black border-2 p-2' name='message' placeholder='message' required type="text" />
            <button className='p-2 bg-black text-white rounded-lg' type='submit'>Submit</button>
        </form>

        <div className='flex-1 rounded-lg bg-cyan-600 p-8 text-white'>
            <pre>{JSON.stringify(data1, null, 2)}</pre>
        </div>

    </div>
  )
}

export default SimpleForm