import {
  AppBar,
  Button,
  Hidden,
  IconButton,
  Toolbar,
  Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function NavBar() {
  const classes = useStyles();
  return (
    <AppBar
      position="static"
      style={{ background: "transparent", boxShadow: "none" }}
    >
      <Toolbar>
        <Hidden mdUp>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.title} />
        </Hidden>
        <Hidden smDown>
          <Typography variant="h6" className={classes.menuButton}>
            <strong>Sapience</strong>
          </Typography>
          <Typography variant="h6" className={classes.menuButton}>
            Notre Offre
          </Typography>
          <Typography variant="h6" className={classes.menuButton}>
            L'Équipe
          </Typography>
          <Typography variant="h6" className={classes.menuButton}>
            Partenaires
          </Typography>
          <div className={classes.title} />
        </Hidden>
        <Button
          edge="end"
          variant="outlined"
          color="inherit"
          href="https://app.sapience.space"
          target="_blank"
          rel="noreferrer"
        >
          Commencer
        </Button>
      </Toolbar>
    </AppBar>
  );
}
