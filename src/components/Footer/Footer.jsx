import React from 'react'
import { 
  Box, 
  Stack, 
  styled, 
  Typography,
} from '@mui/material'
import Link from '@mui/material/Link';
import FooterTitle from './FooterTitle'
import FooterLink from './FooterLink'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {

  const StackColumn = styled(Stack) (() => ({
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    gap: 8,
    textAlign: 'center',
  }));

  const BoxRow = styled(Box) (({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#670f8c',
    flex: 1,
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      gap: 30,
    }
  }));

  return (
    
    <BoxRow 
    component = 'footer'
    sx={{
      py: 4,
      px: 2,
    }}
    >
      <StackColumn>
        <FooterTitle text={'address'} />
        <FooterLink 
        text={'15th Louis St, london 92382, eng'} 
        />
        <FooterLink 
        text={'25 999-345-10800'} 
        />
        <FooterLink 
        text={'info@housesales.com'} 
        />
      </StackColumn>
      
      <StackColumn>
        <FooterTitle text={'our services'} />
        <FooterLink text={'create test'} />
        <FooterLink text={'check test'} />
       
      </StackColumn>
      <StackColumn>
        <FooterTitle text={'our software'} />
        <FooterLink text={'testing'} />
        <FooterLink text={'get in touch'} />
        <FooterLink text={'recruitment'} />
      </StackColumn>

      <StackColumn>
        <FooterTitle text={'testing ninja'} />
        <Stack 
        direction='row' 
        width= '70px'
        maxWidth='100%'
        justifyContent='space-between'
        >
          <Link href="#" variant="body2" 
          sx={{
            color: '#fff',
            "&:hover": {
              color: '#fcad00',
            }
          }}
          >
            <InstagramIcon />  
          </Link> 
          <Link href="#"variant="body2" 
          sx={{
            color: '#fff',
            "&:hover": {
              color: '#fcad00',
            }
          }}
          >
            <FacebookIcon />
          </Link> 
        </Stack>
        <Typography 
        variant='caption'
        component='p' 
        sx={{color:"#fff"}}
        >
          &copy; testingninja.
        </Typography>
      </StackColumn>
    </BoxRow>
  )
}

export default Footer