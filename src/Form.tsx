import React from "react";

interface FormState {
  fname: string;
  mname: string;
  lname: string;
}

export default class Form extends React.Component<any, FormState> {
  constructor(props: any) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      mname: "",
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  }

  onSubmit() {
    const { fname, lname, mname } = this.state;
    if (fname && lname && mname) {
      alert(`You entered the following details \n ${fname} ${mname} ${lname}`);
    }
  }

  componentDidMount(): void {
    console.log("Form component mounted");
  }

  render() {
    console.log("render form");

    return (
      <>
        <input type={"text"} name="fname" onChange={(e) => this.onChange(e)} />
        <input type={"text"} name="mname" onChange={(e) => this.onChange(e)} />
        <input type={"text"} name="lname" onChange={(e) => this.onChange(e)} />
        <input type="submit" value="submit" onClick={() => this.onSubmit()} />
      </>
    );
  }

  componentDidUpdate(
    prevProps: Readonly<any>,
    prevState: Readonly<FormState>,
    snapshot?: any
  ): void {
    console.log("Form component did update");
  }
}
