
import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { Theme, withStyles, createStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import Badge from '@material-ui/core/Badge';




const StyledBadge = withStyles((theme: Theme) =>
  createStyles({
    badge: {
      right: -37,
      top: -22,
      padding: '0 4px',
      backgroundColor: 'rgba(106,62,234,255)',
      color: 'white',
    },
  }),
)(Badge);

const useStyles = makeStyles((theme) => ({
  root: {
      width: 400,
  },
  icons: {
        '& > .fa': {
          margin: theme.spacing(2),
        },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(9),
    height: theme.spacing(9),
  },
}));


interface ContactInfo {
    contactDetails : {
        userId: number;
        fullName: string;
        profileImageUrl: string;
        trust: number;
    }
}

export default function SearchContactCard(props: ContactInfo) {
    const classes = useStyles();

    return(
        <React.Fragment>
            <Container className={classes.root} style={{position:'relative'}}>
              <CardHeader style={{backgroundColor: "#f9f9fc", color: "black", textAlign: 'center', borderTopLeftRadius: 10, borderTopRightRadius: 10}}
                avatar={
                    <Box component="span" style={{width: 150, position: 'absolute', top: -30, zIndex: 1}}>
                      <StyledBadge
                          style={{left: -80, top: -10}}
                          badgeContent={ props.contactDetails.trust }
                        >
                      <CircularProgress variant="determinate" style={{color: 'rgba(106,62,234,255)', position: 'absolute', left: -9, top: -9, width: 90, height: 90}} value={ props.contactDetails.trust } />
                      <Avatar alt="Gina Snelly" src={ props.contactDetails.profileImageUrl } className={classes.large} style={{position: 'absolute'}}/>
                    </StyledBadge>
                    </Box>

                  }
                action={
                    <div className={classes.icons}>
                    <IconButton aria-label="add" color="primary">
                        <AddBoxOutlinedIcon color="primary" fontSize="large" />
                    </IconButton>
                    </div>
                }
                title={ props.contactDetails.fullName }
                subheader="nessuna conessione"
              />
              <CardContent style={{backgroundColor: "#eae8fe", borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}>
                <Typography variant="body2" color="primary" component="p">
                  Sta giá condividendo <text style={{fontWeight: 'bold', textDecorationLine: 'underline'}}> Disney Plus</text>
                </Typography>
              </CardContent>
            </Container>
        </React.Fragment>
    );
}
