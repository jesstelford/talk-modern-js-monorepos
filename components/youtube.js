import React from 'react'
import styled from 'styled-components'
import YouTube from 'react-youtube'

export default styled(({ className, ...props }) => <YouTube
  onReady={event => event.target.pauseVideo()}
  containerClassName={className}
  {...props}
/>)`
  text-align: center;
`;
