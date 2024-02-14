import React from 'react'
import Container from './Container'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <Container>
                <div className='flex justify-between items-center'>
                    <p className='text-[18px] text-white font-normal flex justify-start items-center gap-2'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg> hello@kcdlahore.com</p>
                    <div className='flex justify-center items-center gap-4'>
                        <Link className='text-white' to="https://www.linkedin.com/company/kubernetes-community-days-lahore/" target='_blank'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                        </Link>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer