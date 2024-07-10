import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

function InterviewItemCard({interview}) {
  const router = useRouter();
  const onStart=()=>{
      router.push("/dashboard/interview/"+interview?.mockId)
  }
  const onFeedbackPress = ()=>{
    router.push("/dashboard/interview/"+interview.mockId+"/feedback")
  }
  return (
    <div className='border shadow-sm rounded-lg p-3'>
        <h2 className='font-bold text-yellow-300'>{interview?.jobPosition}</h2>
        <h2 className='text-sm text-white'>{interview?.jobExp} Years of Exp</h2>
        <h2 className='text-xs text-white'>Created At: {interview?.createdAt}</h2>

        <div className='flex justify-between mt-2 gap-5'>
            
            <Button onClick={onFeedbackPress} size="sm" className="bg-gray-400 text-yellow-300 font-bold  hover:bg-yellow-300 hover:text-gray-600 w-full">Feedback</Button>
            <Button onClick={onStart} size="sm" className="bg-gray-400 text-yellow-300 font-bold  hover:bg-yellow-300 hover:text-gray-600 w-full">Start</Button>

        </div>
    </div>
  )
}

export default InterviewItemCard