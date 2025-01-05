import React from 'react'
import { Input } from '@/components/ui/input'
import { useState } from 'react'

const Login = () => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

     try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { "content-type" : "application/json" },
        body: JSON.stringify({email, password})
      });

      const data = await response.json();

      if (data.token) {
        localStorage.setItem('authToken', data.token);
        window.location.href = '/'; 
      } else {
        alert(data.error || 'Login failed');
      }

      if(!response.ok) throw new Error(data.error || "login failed");

      console.log("login succesfull" , data)
     } catch (error:any) {
      setError(error.message)
     }finally{
      setLoading(false);
     }
  }




  return (
    <div>
      <div>
        {error && <p className=''>{error}</p>}
          <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
            <Input type="email" placeholder="Email" value={email} onChange={(e:any) => setEmail(e.target.value)}/>
            <Input type='password' placeholder='Password' value={password} onChange={(e:any) => setPassword(e.target.value)}/>
            <button type='submit' className='w-full border-2 border-black py-3 uppercase' disabled={loading}>
              {loading ? "loging in..." : "Log In"}
            </button>
          </form>
      </div>
    </div>
  )
}

export default Login