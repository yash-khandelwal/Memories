import React, {useState, useEffect} from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import {getPosts} from './actions/posts';
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';
import useStyles from './styles.js';
const memories = 'https://raw.githubusercontent.com/adrianhajdin/project_mern_memories/master/client/src/images/memories.png?token=AF56X74XONEUGZ4FD2FUIA27UURPI';


const App = () => {

	const classes = useStyles();
	const dispatch = useDispatch();
	const [currentId, setCurrentId] = useState(null);

	useEffect(() => {
		dispatch(getPosts());
	}, [dispatch, currentId])

	return (
		<Container maxWidth='lg'>
			<AppBar className={classes.appBar} position='static' color='inherit'>
				<Typography className={classes.heading} variant='h2' align='center'>Memories</Typography>
				<img className={classes.image} src={memories} alt='memories' height='60' />
			</AppBar>
			<Grow in>
				<Container>
					<Grid container className={classes.mainContainer} justify='space-between' alignItems='stretch' spacing={3} >
						<Grid item xs={12} sm={7} >
							<Posts setCurrentId={setCurrentId} />
						</Grid>
						<Grid item xs={12} sm={4} >
							<Form currentId={currentId} setCurrentId={setCurrentId} />
						</Grid>
					</Grid>
				</Container>
			</Grow>
		</Container>
	)
}

export default App;
