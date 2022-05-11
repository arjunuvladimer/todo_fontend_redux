import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import AddTodo from './components/AddTodo/AddTodo';
import DisplayTodo from './components/DisplayTodos/DisplayTodos';

function App() {
  return (
    <>
      <Container fixed>
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
          <h1 style={{textAlign:'center'}}>TODO APP</h1>
          <Grid container> {/**ROW */}
              <Grid item lg={6}> {/** Column 6 */}
                <h2 style={{textAlign:'center'}}>ADD TODO</h2>
                <AddTodo />
              </Grid>
              <Grid item lg={6}> {/** Column 6 */}
                <h2 style={{textAlign:'center'}}>DISPLAY TODO</h2>
                <DisplayTodo />
              </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default App;
