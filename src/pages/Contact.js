import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { Box } from '@mui/system'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
import React from 'react'
import Layout from '../components/Layout/Layout'

const Contact = () => {
  return (
    <Layout>
    <Box sx={{my:5,
    ml:6,
    "& h4":{fontWeight:'bold' ,mb:2},
    }}>
      <Typography variant='h4'>
        Contact My Resturant
      </Typography>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.</p>
    </Box>
    <Box sx={{m:3 , width:"600px" ,ml:10 ,
    "@media (max-width:600px)":{
       width:"300px" ,
    }
    }}>
      <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{bgcolor:'black' , color:'white'}} align="center">
              Contact Details
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
          <TableCell>
            <SupportAgentIcon sx={{color:'red' ,pt:1}} /> 1800-0010-005 tollfree
          </TableCell>
          </TableRow>

          <TableRow>
          <TableCell>
            <MailIcon sx={{color:'skyblue' ,pt:1}} /> help@myresturant.com
          </TableCell>
          </TableRow>
          <TableRow>
          <TableCell>
            <CallIcon sx={{color:'green' ,pt:1}} /> +91 8227861976
          </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      </TableContainer>
    </Box>
    </Layout>
  )
}

export default Contact