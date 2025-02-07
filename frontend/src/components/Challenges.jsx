import React from 'react'
import Video from './Video'
import Play from '../assets/play.mp4'
import { FaRegLightbulb } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";
import { data } from 'react-router';

function Challenges() {

  const mockChats = [
    { id: 1, name: "Sit to stand",description:"Sit To Stand. Sit on a chair and stand up straight, keeping your posture straight, and return back to a sitting position.",img:"data:image/jpeg;base64,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" },
    { id: 2, name: "Seated knee raises",description:"This exercise will strengthen your triceps, chest and the front of your shoulders. Strengthening those parts of the body will be particularly useful if you transfer from a wheelchair.",img:"https://thumbs.dreamstime.com/b/cartoon-man-special-needs-sitting-wheelchair-lifting-weights-training-workout-room-male-trauma-doing-physical-347703706.jpg" },
    { id: 3, name: "Reverse Crunches",description:"When seated, raise one knee upwards until your foot is several inches off the ground. Lower slowly and repeat the process. Once you’ve completed a set on one side, repeat this on the other leg.",img:"https://enabled.in/wp/wp-content/uploads/2018/11/stretching-exercises-for-wheelchair-users-right-body.jpg"},
    { id: 4, name: "Back exercises",description:"For those who need to practice walking, this exercise is ideal. The benefits are two-fold. First, the sit to stand strengthens the legs, and then the short walk serves to improve… wait for it… walking!", img:"https://img.freepik.com/free-vector/physiotherapy-rehabilitation-isometric-composition-with-man-wheelchair-with-training-machine-illustration_1284-64100.jpg"},
  
  ];

  return (
    
    <div className='flex'>
      <div className='mt-10 w-112 h-140'>

      {
      mockChats.map((chat,index) => (
        <Video key={index} values={chat}/>
      ))
      }
      </div>
      <div className='w-160 h-screen bg-zinc-300 px-8 py-8'>
        <video autoPlay muted loop controls src={Play} className='rounded-md'></video>
        <h1 className='ml-10 mt-4 text-2xl font-bold'>Custom Workout Plans</h1>
        <div className='flex mt-10 '>
        <FaRegLightbulb /> 
        <h3 className='ml-4 -mt-2 '>Personalised plan</h3>
        </div>
        <div className='flex mt-2 '>
        <IoPeopleSharp />
        <h3 className='ml-4 -mt-1'>Community support</h3>
        </div>
        <h1 className='ml-10 mt-10 text-2xl font-bold '>Exercise Features</h1>
        <h3>Can improve cardiovascular health, lower blood pressure, and strengthen the immune system</h3>
      </div>
    </div>

    
  )
}

export default Challenges