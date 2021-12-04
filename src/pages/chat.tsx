import React from "react";
import { Container, Typography, TextField } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Form, Field } from "react-final-form";

const Chat: React.FC = () => {
  const classes = useStyles();

  const handleSubmit = (values: { message: string }) => {
    console.log(values);
  };
  
  return (
    <React.Fragment>
      <Container>
        <Typography variant="h4" className={classes.title}>
          chat
        </Typography>
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid container item xs={12}>
              <Grid item xs={6}>
                <Paper className={classes.paper} variant="outlined">
                  ここにチャット内容表示します。ここにチャット内容表示します。ここにチャット内容表示します。ここにチャット内容表示します。ここにチャット内容表示します。ここにチャット内容表示します。ここにチャット内容表示します。ここにチャット内容表示します。ここにチャット内容表示します。ここにチャット内容表示します。ここにチャット内容表示します。ここにチャット内容表示します。ここにチャット内容表示します。ここにチャット内容表示します。ここにチャット内容表示します。ここにチャット内容表示します。
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper className={classes.paper} variant="outlined">
                  ここにチャット内容表示します。ここにチャット内容表示します。ここにチャット内容表示します。ここにチャット内容表示します。ここにチャット内容表示します。ここにチャット内容表示します。ここにチャット内容表示します。ここにチャット内容表示します。ここにチャット内容表示します。ここにチャット内容表示します。ここにチャット内容表示します。ここにチャット内容表示します。ここにチャット内容表示します。ここにチャット内容表示します。ここにチャット内容表示します。ここにチャット内容表示します。
                </Paper>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Form
                onSubmit={handleSubmit}
                render={({ handleSubmit, submitting, pristine }) => (
                  <form onSubmit={handleSubmit}>
                    <div>
                      <label>ひとしくんのメッセージ</label>
                      <Field
                        name="messageHitoshi"
                        render={({ input }) => {
                          return (
                            <TextField
                              {...input}
                              placeholder={""}
                              autoFocus
                              fullWidth
                              variant="outlined"
                              multiline
                              minRows={3}
                            />
                          );
                        }}
                      />
                    </div>
                    <div>
                      <button type="submit" disabled={submitting || pristine}>
                        送信
                      </button>
                    </div>
                  </form>
                )}
              />
            </Grid>
            <Grid item xs={6}>
              <Form
                onSubmit={handleSubmit}
                render={({ handleSubmit, submitting, pristine }) => (
                  <form onSubmit={handleSubmit}>
                    <div>
                      <label>まさとしくんのメッセージ</label>
                      <Field
                        name="messageMasatoshi"
                        render={({ input }) => {
                          return (
                            <TextField
                              {...input}
                              placeholder={""}
                              fullWidth
                              variant="outlined"
                              multiline
                              minRows={3}
                            />
                          );
                        }}
                      />
                    </div>
                    <div>
                      <button type="submit" disabled={submitting || pristine}>
                        送信
                      </button>
                    </div>
                  </form>
                )}
              />
            </Grid>
          </Grid>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default Chat;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
      overflowWrap: "break-word",
    },
    title: {},
  })
);
