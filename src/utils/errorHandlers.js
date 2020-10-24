export const catchFunction = (err) => {
  if (err.response) {
    const {
      response: { status, data, statusText }
    } = err;
    this.setState({
      errorData: { status, msg: data.msg, statusText },
      isLoading: false
    });
  } else {
    const status = '500';
    const msg = err.message;
    const statusText = 'Something went wrong';

    this.setState({
      errorData: { status, msg: data.msg, statusText },
      isLoading: false
    });
  }
  console.dir(err);
};
