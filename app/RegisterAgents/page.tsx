'use client';
import Link from 'next/link';
import React, { useState, FormEvent } from 'react'
import { MdAccountCircle } from "react-icons/md";

interface Agents{
    agentname: string,
    agentlocation: string,
    contact: string,
    GrossCommision: string,
    WinsCommission: string
}

const RegisterAgents = () => {
  const [Agent, setAgent] = useState<Agents[]>([]);
  const [editAgent, SetEditAgent] = useState<number | null>(null)
  const [AgentData, SetAgentData] = useState<Agents>({agentname:'',agentlocation:'',contact:'', GrossCommision:'',WinsCommission:''})

  const OpenModal = (index:number | null )=>{
    SetEditAgent(index);
    if (index !== null) {
      SetAgentData(Agent[index]);
    } else {
      SetAgentData({agentname:'', agentlocation:'',contact:'', GrossCommision:'', WinsCommission:''});
    }
    (document.getElementById('Accounts_Modal') as HTMLDialogElement)?.showModal();
  };

  const HandleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if(AgentData.agentname && AgentData.agentlocation && AgentData.contact && AgentData.GrossCommision && AgentData.WinsCommission){
      if(editAgent === null ){
        setAgent([...Agent, AgentData])
        SetAgentData({ agentname:'', agentlocation:'',contact:'', GrossCommision:'', WinsCommission:''})
      } else {
        setAgent(Agent.map((Agent,index ) => index === editAgent ? AgentData :Agent))
      }
    } else {
      alert('Please fill out all fields');
    }
  }

  return (
    <div className=' container'>
      <button
        onClick={()=>OpenModal(null)} 
        className='text-white font-serif bg-teal-500 rounded-lg p-3 hover:bg-teal-400 color-transition'>New Agent
      </button>

      <dialog id='Accounts_Modal' className='dialog'>
        <div className='modal-box p-10 grid grid-cols-1'>
          <h3 className=' font-semibold text-center text-green-500'>Enter Agent Infomation!</h3>
          <form  className='m-10' onSubmit={HandleSubmit}>
            <label> Name <br/>
              <input 
                name='agentname'
                value={AgentData.agentname}
                onChange={e => SetAgentData({ ...AgentData, agentname: e.target.value })}
                placeholder='Agent Name' 
                className=' border-sky-500 border-2'
              />
            </label>
            <br/>
            <label > Location <br/>
                  <input
                  name='agentLocation'
                  value={AgentData.agentlocation}
                  onChange={e => SetAgentData({...AgentData, agentlocation: e.target.value})} 
                  placeholder='Location' 
                  className=' border-sky-500 border-2'/>
              </label>
                  <br/>
                  <label > Contact <br/>
                  <input
                  name='Contact'
                  value={AgentData.contact}
                  onChange={e => SetAgentData({...AgentData, contact: e.target.value})} 
                  placeholder='Contact' 
                  className=' border-sky-500 border-2'/>
              </label>
              <br/>
              <label >GrossComission <br/>
                  <input
                  name='GrossComission'
                  value={AgentData.GrossCommision}
                  onChange={e => SetAgentData({...AgentData, GrossCommision: e.target.value})} 
                  placeholder='Gross Comission' 
                  className=' border-sky-500 border-2'/>
              </label>
              <br/>
              <label > Wins Comission <br/>
                  <input
                  name='Wins Comission'
                  value={AgentData.WinsCommission}
                  onChange={e => SetAgentData({...AgentData, WinsCommission: e.target.value})} 
                  placeholder='Wins Comission'
                  className=' border-sky-500 border-2'/>
              </label>
              
              <br/>
            <div className='flex justify-between m-5'>
              <button type='submit' value={'submit'} className=' text-white bg-teal-600 p-1 rounded-md'>Submit</button>
              <button 
                type="button" 
                onClick={() => (document.getElementById('Accounts_Modal') as HTMLDialogElement)?.close()} 
                className=' text-white bg-red-600 rounded-md p-1 hover:bg-red-300'
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </dialog>
      
      <div className='flex flex-wrap mx-10 gap-4'>
      {Agent.map((agent, index) => (
  <div key={index} className='flexcard w-60 border-l-orange-200 rounded-2xl border-2 hover:bg-slate-200 m-3 p-2'>
    <div className='card-body items-center text-center'>
      <h2 className='card-title'>{agent.agentname}</h2>
      <p>{agent.agentlocation}</p>
      <p>{agent.contact}</p>
      <p>{agent.GrossCommision} | { agent.WinsCommission}</p>
      <div className='card-actions justify-between'>
        <Link href='/AccountStatements'>
        <button className=' ml-1 bg-teal-400 mx-3 p-1 rounded-lg'>Statements</button>
        </Link>
        <button className='bg-green-500 p-1 rounded-md' onClick={() => OpenModal(index)}>Edit</button>
      </div>
    </div>
    
  </div>))}
    </div>
    </div>
  )
}

export default RegisterAgents
