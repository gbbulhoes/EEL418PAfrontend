import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

import { alpha, makeStyles } from '@material-ui/core/styles';

import logoatleta from '../assets/atleta.png';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(10),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
    logoatleta: {
        maxWidth: 35,
        paddingLeft: 50,
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(10),
          display: 'block',
        },
    },
}));


export default function Navbar() {

    const classes = useStyles();

    return (

        <React.Fragment>

            <AppBar>
                <Toolbar>
                    <a href="/esportes">
                        <div>
                            <img src={logoatleta} alt="Atleta" className={classes.logoatleta} />
                        </div>
                    </a>

                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Procurar..."
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>

                    <div>
                        <Typography className={classes.title} variant="h6" noWrap>
                            <a href="/"> Sair </a>
                        </Typography>
                    </div>

                </Toolbar>
            </AppBar>

        </React.Fragment>

    );
}