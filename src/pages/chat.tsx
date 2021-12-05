import React from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { Form, Field } from "react-final-form";

// mui
import { Container, Typography, TextField } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

// model
import { MessageModel } from "../models/ChatModel";

// action,state
import {
  submitHitoshi,
  submitMasatoshi,
  selectChatHitoshi,
  selectChatMasatoshi,
} from "../slices/chatSlice";

const Chat: React.FC = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const chatHitoshi = useAppSelector(selectChatHitoshi);
  const chatMasatoshi = useAppSelector(selectChatMasatoshi);

  const handleSubmitHitoshi = (
    values: MessageModel,
    form: Record<string, any>
  ) => {
    form.reset();
    dispatch(submitHitoshi(values));
  };

  const handleSubmitMasatoshi = (
    values: MessageModel,
    form: Record<string, any>
  ) => {
    form.reset();
    dispatch(submitMasatoshi(values));
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
                  {chatHitoshi.map((item, index) => (
                    <div key={index}>{item}</div>
                  ))}
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper className={classes.paper} variant="outlined">
                  {chatMasatoshi.map((item, index) => (
                    <div key={index}>{item}</div>
                  ))}
                </Paper>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Form
                onSubmit={handleSubmitHitoshi}
                render={({ handleSubmit, submitting, pristine, form }) => (
                  <form onSubmit={handleSubmit}>
                    <div>
                      <label>ひとしくんのメッセージ</label>
                      <Field
                        name="message"
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
                onSubmit={handleSubmitMasatoshi}
                render={({ handleSubmit, submitting, pristine }) => (
                  <form onSubmit={handleSubmit}>
                    <div>
                      <label>まさとしくんのメッセージ</label>
                      <Field
                        name="message"
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
