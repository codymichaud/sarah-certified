
import PropTypes from 'prop-types'
import React from 'react'
import dynamic from 'next/dynamic';

const SignUpClient = dynamic(() => import('../../hooks/SignUpClient'), {
  ssr: false
});



export default function SignUp() {
  return (
    <div><SignUpClient /></div>
  )
}

SignUp.propTypes = {
  second: PropTypes.third
}

