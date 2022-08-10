import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Collapse
} from "@material-ui/core";
import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
import recommendation from "../images/movie-recommendation.png"
import haci from "../images/haci.png"
import retailstore from "../images/retailstore.png"
import cricket from "../images/cricket.png"


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 100,
  },
  heading: {
    fontSize: 65,
    fontWeight: "500",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
  card: {
    maxWidth: 500,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

const Projects = () => {
  const classes = useStyles();
  const [project1, setProject1] = React.useState(false);
  const [project2, setProject2] = React.useState(false);
  const [project3, setProject3] = React.useState(false);
  const [project4, setProject4] = React.useState(false);

  
  const handleExpandProject1 = () => {
    setProject1(!project1)
  };

  const handleExpandProject2 = () => {
    setProject2(!project2);
  };

  const handleExpandProject3 = () => {
    setProject3(!project3);
  };

  const handleExpandProject4 = () => {
    setProject4(!project4);
  };

  return (
    <>
      <div style={{paddingLeft:"2em", paddingRight:"2em" ,display:"flex", textAlign:"-webkit-center"}} className={classes.root}>
        <Grid container spacing={3} justify="center" alignItems="center">
          <Grid item xs={12}>
            <Typography className = "project-heading" > <strong class="purple">Projects</strong>
            </Typography>
          </Grid>

          {/* -----------------------------------Project-1---------------------------------- */}
          <Grid item xs={12} sm={6}>
            <Card className={classes.card}>
              <CardHeader title="Hollywood Movie Recommendation System" />
              <CardMedia
                className={classes.media}
                image={recommendation}
                title="Blog App"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  An AI based web application which gives recommendations based on previously watched movies.
                </Typography>
              </CardContent>

              <CardActions disableSpacing>
                <IconButton
                  aria-label="source code"
                  href="https://github.com/B-UDAY-CHANDRA-001/hollywood-movie-recommendation-system"
                  target="_blank"
                >
                  <FaGithub />
                </IconButton>
                <IconButton
                  aria-label="visit the site"
                  href="https://hollywood-movie-recomd-api.herokuapp.com/"
                  target="_blank"
                >
                  <CgWebsite />
                </IconButton>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: project1,
                  })}
                  onClick={handleExpandProject1}
                  aria-expanded={project1}
                  aria-label="show more"
                >
                  <IoIosArrowDown />
                </IconButton>
              </CardActions>

              <Collapse in={project1} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph><strong>Description:</strong></Typography>
                  <Typography style={{textAlign:"justify"}} paragraph>
                    This is an AI based web application where user can get recommendations by searching previously watched movie
                    and it also gives recommendations based on different gener. Project is based Content-based filtering.
                    Model is trained with customized dataset.It is a entire end-to-end machine 
                    learning project developed with Flask as a backend, HTML, CSS, BootStrap as frontend and deployed with Heroku.

                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>

          {/* -----------------------------------Project-2---------------------------------- */}
          <Grid item xs={12} sm={6}>
            <Card className={classes.card}>
              <CardHeader title="Hand Cricket with CNN" />
              <CardMedia
                className={classes.media}
                image={haci}
                title="Hand Cricket with CNN"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                Multiplayer game which takes real time images to detects and classifies them.
                </Typography>
              </CardContent>

              <CardActions disableSpacing>
                <IconButton
                  aria-label="source code"
                  href="https://github.com/B-UDAY-CHANDRA-001/hand-cricket-with-cnn"
                  target="_blank"
                >
                  <FaGithub />
                </IconButton>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: project2,
                  })}
                  onClick={handleExpandProject2}
                  aria-expanded={project2}
                  aria-label="show more"
                >
                  <IoIosArrowDown />
                </IconButton>
              </CardActions>

              <Collapse in={project2} timeout="auto" unmountOnExit>
                <CardContent>
                <Typography paragraph><strong>Description:</strong></Typography>
                  <Typography style=  {{ textAlign:"justify"}} paragraph>
                  The project aims to create an
                  application that implements Hand Cricket online.
                  Multiplayer game where two players can play in real-time.
                  Application takes real time images from both playes and detects the
                  image and classifies them. Algorithm is trained on customized dataset, with 
                  Convolutional Neural Networks, Transfer Learning. New dataset was generated consisting of 20,000 images
                  and 10 classes. Referring to research papers, many architectures were considered.
                  After testing VGG16 architecture was found to have the highest accuracy (99%
                  Validation accuracy).
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
                      {/* --------------------------------- project -3 ------------------------------------- */}

          <Grid item xs={12} sm={6}>
            <Card className={classes.card}>
              <CardHeader title="Retail store management system" />
              <CardMedia
                className={classes.media}
                image={retailstore}
                title="Retail store management system"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Small prototype of database management of the Retail store management system.
                </Typography>
              </CardContent>

              <CardActions disableSpacing>
                <IconButton
                  aria-label="source code"
                  href="https://github.com/B-UDAY-CHANDRA-001/dbms-mini-project-retailers-"
                  target="_blank"
                >
                  <FaGithub />
                </IconButton>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: project3,
                  })}
                  onClick={handleExpandProject3}
                  aria-expanded={project3}
                  aria-label="show more"
                >
                  <IoIosArrowDown />
                </IconButton>
              </CardActions>

              <Collapse in={project3} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph><strong>Description:</strong></Typography>
                  <Typography style=  {{ textAlign:"justify"}} paragraph>
                  This application is a small demo of Retail Store management, which is capable to add and view products.
                  Admin can add customers products to cart and even edit them. Designed  and implemented 
                  Database Schema for Retail store which performs Create, Update, Read, Delete (CURD) opperations.
                  Application is developed with Django as a backend, DataBase:Mysql and with  HTML, CSS, BootStrap as frontend.

                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
                      {/* ------------------------project -4--------------------------- */}

          <Grid item xs={12} sm={6}>
            <Card className={classes.card}>
              <CardHeader title="IPL 2020 Player score prediction" />
              <CardMedia
                className={classes.media}
                image={cricket}
                title="IPL 2020 Player score prediction"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                Individual player score prediction for IPL2020.
                </Typography>
              </CardContent>

              <CardActions disableSpacing>
                <IconButton
                  aria-label="source code"
                  href="https://github.com/B-UDAY-CHANDRA-001/ipl2020_player_score_prediction"
                  target="_blank"
                >
                  <FaGithub />
                </IconButton>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: project4,
                  })}
                  onClick={handleExpandProject4}
                  aria-expanded={project4}
                  aria-label="show more"
                >
                  <IoIosArrowDown />
                </IconButton>
              </CardActions>

              <Collapse in={project4} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph><strong>Description:</strong></Typography>
                  <Typography style=  {{ textAlign:"justify"}} paragraph>
                    This project is to get prediction of individual IPL scores of the players for IPL2020, 
                    Model is trained with various models such as Linear Regression, Ridge Algorithms, Random Forest,
                    etc from SK Learn and XGBoost Libraries. (Root of Mean Square Error) RMSE from SK Learn were used 
                    to judge if the model accuracy.RandomCV library from SK Learn used to identified the best parameters for the model.
                    Finally, using XGBoost Library and fitted the necessary features and trained the model to predict next year 
                    score of a batsman.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>


        </Grid>
      </div>
    </>
  );
};

export default Projects;