import React from 'react';
import { withStyles } from '@material-ui/styles';

import styles from './style';

interface Props {
  classes: any;
}

const Footer = ({ classes }: Props) => (
  <footer className={classes.container}>
    © {new Date().getFullYear()}, Built with &nbsp;&nbsp;
    <a href='https://www.gatsbyjs.org'>Gatsby</a>
  </footer>
);

export default withStyles(styles)(Footer);
