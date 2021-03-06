import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Button, {StatusButton} from 'plugins/Button';
import AddIcon from '@material-ui/icons/Add';
import CodeAddr from 'components/CodeAddr/CodeAddr.jsx';
import Usage from 'components/Usage/Usage';

function handle(e) {
    console.log(e);
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            Math.random() > 0.5 ? reject('err') : resolve('ok');
        }, 1000);
    }).then(function (r) {
        return true;
    });
}

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
});
function onClick(e) {
    console.log(this, e);
}
function StatusButtons(props) {
    const {classes} = props;
    return (
        <div>
            <CodeAddr addr="Buttons/Buttons.jsx"/>
            <Usage>
                {
`//first: installation
npm install deepmerge --save
//second: 点击代码地址,查看demo示例
`}
            </Usage>

            <StatusButton
                color="primary"
                onClick={onClick}
                variant="raised"
                onHandler={handle}
                className={classes.button}
            >
                开始扩容
            </StatusButton>
            <StatusButton color="primary" onHandler={handle} className={classes.button}>
                开始扩容
            </StatusButton>
            <Button color="primary" onClick={handle} variant="raised" className={classes.button}>
                开始扩容
            </Button>
            <Button color="primary" onClick={handle} className={classes.button}>
                开始扩容
            </Button>
            <Button color="primary" onClick={onClick} className={classes.button}>
                only Click
            </Button>
            <Button
                variant="fab"
                color="primary"
                onClick={handle}
                aria-label="add"
                className={classes.button}
            >
                <AddIcon />
            </Button>
        </div>
    );
}

StatusButtons.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(StatusButtons);
