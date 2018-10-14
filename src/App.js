import React, { Component } from 'react';

import Chart from 'chart.js';
import PropTypes from 'prop-types';
import ReactChartkick, { BarChart } from 'react-chartkick';
import { Button, Divider, Grid, Typography, Paper, NativeSelect } from '@material-ui/core';
import { ValidatorForm } from 'react-material-ui-form-validator';
import { isMobile } from 'react-device-detect';

import { withStyles } from '@material-ui/core/styles';
import { Input, Stepper, Table } from './components';
import './App.css';

import logo from './public/calculator-icon.png';
import styles from './styles';

ReactChartkick.addAdapter(Chart);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { activeStep: 0, evaluationExtraField1: '', evaluationExtraField2: '', evaluationExtraField3: '', evaluationExtraFields2: false, evaluationExtraFields3: false, evaluationExtraFields: false, evaluationMaturaCroatian: '', evaluationMaturaCroatianLevel: 'A', evaluationMaturaElective1: '', evaluationMaturaElective2: '', evaluationMaturaElective3: '', evaluationMaturaElectiveInputs2: false, evaluationMaturaElectiveInputs3: false, evaluationMaturaElectiveInputs: false, evaluationMaturaEnglish: '', evaluationMaturaEnglishLevel: 'A', evaluationMaturaMathematics: '', evaluationMaturaMathematicsLevel: 'A', evaluationSchoolGrades: '', percentageFirstGrade: '', percentageFourthGrade: '', percentageExtraField1: '', percentageExtraField2: '', percentageExtraField3: '', percentageMaturaCroatian: '', percentageMaturaElective1: '', percentageMaturaElective2: '', percentageMaturaElective3: '', percentageMaturaEnglish: '', percentageMaturaMathematics: '', percentageSecondGrade: '', percentageThirdGrade: '', percentagesTotal: '', pointsMaturaCroatian: '', pointsMaturaElective1: '', pointsMaturaElective2: '', pointsMaturaElective3: '', pointsMaturaEnglish: '', pointsMaturaMathematics: '' };
  }

  handleChange = ({ target: { value, name } }) => this.setState({ [name]: value });

  handleSelectChange = ({ target: { value, name } }) => this.setState({ [name]: value });

  handleBack = () => window.location.reload()

  addeEvaluationMaturaElective = () => {
    const { evaluationMaturaElectiveInputs, evaluationMaturaElectiveInputs2 } = this.state;

    this.setState({ evaluationMaturaElectiveInputs: true });

    if (evaluationMaturaElectiveInputs) {
      this.setState({ evaluationMaturaElectiveInputs2: true });
    } if (evaluationMaturaElectiveInputs2) {
      this.setState({ evaluationMaturaElectiveInputs3: true });
    }
  }

  addEvaluationExtraField = () => {
    const { evaluationExtraFields, evaluationExtraFields2 } = this.state;

    this.setState({ evaluationExtraFields: true });

    if (evaluationExtraFields) {
      this.setState({ evaluationExtraFields2: true });
    } if (evaluationExtraFields2) {
      this.setState({ evaluationExtraFields3: true });
    }
  }

  handleClick = () => {
    const { activeStep, evaluationExtraField1, evaluationExtraField2, evaluationExtraField3, evaluationMaturaCroatian, evaluationMaturaCroatianLevel, evaluationMaturaElective1, evaluationMaturaElective2, evaluationMaturaElective3, evaluationMaturaEnglish, evaluationMaturaEnglishLevel, evaluationMaturaMathematics, evaluationMaturaMathematicsLevel, percentageExtraField1, percentageExtraField2, percentageExtraField3, percentageFirstGrade, percentageFourthGrade, percentageMaturaCroatian, percentageMaturaElective1, percentageMaturaElective2, percentageMaturaElective3, percentageMaturaEnglish, percentageMaturaMathematics, percentageSecondGrade, percentageThirdGrade } = this.state;
    const round = equation => Math.round(equation);

    if (activeStep === 0) {
      this.setState({ activeStep: activeStep + 1 });
    } else if (activeStep === 1) {
      this.setState({
        activeStep: activeStep + 1,
        percentagesTotal: parseFloat(percentageFirstGrade, 10) + parseFloat(percentageSecondGrade, 10) + parseFloat(percentageThirdGrade, 10) + parseFloat(percentageFourthGrade, 10),
      });
    } else if (activeStep === 2) {
      this.setState({
        activeStep: activeStep + 1,
        pointsExtraField1: round(percentageExtraField1 * evaluationExtraField1 / 10),
        pointsExtraField2: round(percentageExtraField2 * evaluationExtraField2 / 10),
        pointsExtraField3: round(percentageExtraField3 * evaluationExtraField3 / 10),
        pointsMaturaCroatian: round((percentageMaturaCroatian * (evaluationMaturaCroatianLevel === 'A' ? 1.6 : 1) / 160) * evaluationMaturaCroatian * 10),
        pointsMaturaElective1: round(percentageMaturaElective1 * evaluationMaturaElective1 / 10),
        pointsMaturaElective2: round(percentageMaturaElective2 * evaluationMaturaElective2 / 10),
        pointsMaturaElective3: round(percentageMaturaElective3 * evaluationMaturaElective3 / 10),
        pointsMaturaEnglish: round((percentageMaturaEnglish * (evaluationMaturaEnglishLevel === 'A' ? 1.6 : 1) / 160) * evaluationMaturaEnglish * 10),
        pointsMaturaMathematics: round((percentageMaturaMathematics * (evaluationMaturaMathematicsLevel === 'A' ? 1.6 : 1) / 160) * evaluationMaturaMathematics * 10),
      });
    }

    window.scrollTo(0, 0);
  }

  render() {
    const { activeStep, evaluationExtraField1, evaluationExtraField2, evaluationExtraField3, evaluationExtraFields, evaluationExtraFields2, evaluationExtraFields3, evaluationMaturaCroatian, evaluationMaturaCroatianLevel, evaluationMaturaElective1, evaluationMaturaElective2, evaluationMaturaElective3, evaluationMaturaElectiveInputs, evaluationMaturaElectiveInputs2, evaluationMaturaElectiveInputs3, evaluationMaturaEnglish, evaluationMaturaEnglishLevel, evaluationMaturaMathematics, evaluationMaturaMathematicsLevel, evaluationSchoolGrades, percentageExtraField1, percentageExtraField2, percentageExtraField3, percentageFirstGrade, percentageFourthGrade, percentageMaturaCroatian, percentageMaturaElective1, percentageMaturaElective2, percentageMaturaElective3, percentageMaturaEnglish, percentageMaturaMathematics, percentageSecondGrade, percentageThirdGrade, percentagesTotal, pointsExtraField1, pointsExtraField2, pointsExtraField3, pointsMaturaCroatian, pointsMaturaElective1, pointsMaturaElective2, pointsMaturaElective3, pointsMaturaEnglish, pointsMaturaMathematics } = this.state;
    const { classes } = this.props;

    let dialogContent;

    if (activeStep === 0) {
      dialogContent = (
        <React.Fragment>
          <Divider light classes={{ root: classes.dividerMarginBottom10 }} />
          <Typography classes={{ root: classes.marginBottomMobile }} variant="caption"> Ukoliko niste sigurni koliko vaš fakultet pridaje bodova određenim predmetima, posjetite: <Button classes={{ root: classes.button }} target="_blank" href="https://www.postani-student.hr/Ucilista/Nositelji.aspx" color="primary">Postani Student</Button></Typography>
          <Divider light classes={{ root: classes.dividerMarginBottom20 }} />
          <Typography classes={{ root: classes.marginBottom10 }} variant="title">Ocjene iz srednje škole</Typography>
          <Typography classes={{ root: classes.caption }} variant="caption">Ovdje upišite postotak od ukupnog broja bodova koji vam {isMobile ? null : <br />} određeni fakultet pridaje za prosjek ocjena srednje škole</Typography>
          <Input autoFocus label="Prosjek svih ocjena" name="evaluationSchoolGrades" onChange={this.handleChange} percentage required value={evaluationSchoolGrades} />
          <Divider light classes={{ root: classes.divider }} />
          <Typography classes={{ root: classes.marginBottom10 }} variant="title">Obvezni dio državne mature</Typography>
          <Typography classes={{ root: classes.caption }} variant="caption">Ovdje upišite postotak od ukupnog broja bodova koji vam {isMobile ? null : <br />} određeni fakultet pridaje za obvezni dio državne mature</Typography>
          <Grid container justify="center">
            <Grid item xs={12} lg={4}>
              <Input label="Hrvatski" name="evaluationMaturaCroatian" onChange={this.handleChange} percentage required value={evaluationMaturaCroatian} />
              <NativeSelect name="evaluationMaturaCroatianLevel" classes={{ root: classes.marginLeft10 }} value={evaluationMaturaCroatianLevel} onChange={this.handleSelectChange}>
                <option value="A">A</option>
                <option value="B">B</option>
              </NativeSelect>
            </Grid>
            <Grid className={classes.marginTopMobile} item xs={12} lg={4}>
              <Input label="Matematika" name="evaluationMaturaMathematics" onChange={this.handleChange} percentage required value={evaluationMaturaMathematics} />
              <NativeSelect name="evaluationMaturaMathematicsLevel" classes={{ root: classes.marginLeft10 }} value={evaluationMaturaMathematicsLevel} onChange={this.handleSelectChange}>
                <option value="A">A</option>
                <option value="B">B</option>
              </NativeSelect>
            </Grid>
            <Grid className={classes.marginTopMobile} item xs={12} lg={4}>
              <Input label="Engleski jezik" name="evaluationMaturaEnglish" onChange={this.handleChange} percentage required value={evaluationMaturaEnglish} />
              <NativeSelect name="evaluationMaturaEnglishLevel" classes={{ root: classes.marginLeft10 }} value={evaluationMaturaEnglishLevel} onChange={this.handleNativeSelectChange}>
                <option value="A">A</option>
                <option value="B">B</option>
              </NativeSelect>
            </Grid>
          </Grid>
          <Grid container justify="center">
            <Grid item xs={12} lg={6}>
              <Divider light classes={{ root: classes.divider }} />
              <Typography classes={{ root: classes.marginBottom10 }} variant="title">Izborni dio državne mature</Typography>
              <Typography classes={{ root: classes.caption }} variant="caption" style={{ marginBottom: '0 !important' }}>
                Ovdje upišite postotak od ukupnog broja bodova koji vam određeni {isMobile ? null : <br />} fakultet pridaje za izborni dio državne mature
                <br />
                { !evaluationMaturaElectiveInputs3
                  ? <Button onClick={this.addeEvaluationMaturaElective} color="primary">Dodaj izborni predmet</Button>
                  : null
                }
              </Typography>
              <Grid container justify="center">
                { evaluationMaturaElectiveInputs
                  ? (
                    <Grid key={1} item xs={12}>
                      <Input name="evaluationMaturaElective1" label="1. Izborni predmet" value={evaluationMaturaElective1} onChange={this.handleChange} percentage />
                    </Grid>
                  ) : null
                }
                { evaluationMaturaElectiveInputs2
                  ? (
                    <Grid className={classes.marginTop5} key={2} item xs={12}>
                      <Input name="evaluationMaturaElective2" label="2. Izborni predmet" value={evaluationMaturaElective2} onChange={this.handleChange} percentage />
                    </Grid>
                  ) : null
                }
                { evaluationMaturaElectiveInputs3
                  ? (
                    <Grid className={classes.marginTop5} key={3} item xs={12}>
                      <Input name="evaluationMaturaElective3" label="3. Izborni predmet" value={evaluationMaturaElective3} onChange={this.handleChange} percentage />
                    </Grid>
                  ) : null
                }
              </Grid>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Divider light classes={{ root: classes.divider }} />
              <Typography classes={{ root: classes.marginBottom10 }} variant="title">Dodatne provjere i posebna postignuća</Typography>
              <Typography classes={{ root: classes.caption }} variant="caption" style={{ marginBottom: '0 !important' }}>
                Ovdje upišite postotak od ukupnog broja bodova koji vam određeni {isMobile ? null : <br />} fakultet pridaje za dodatne provjere i posebna postignuća
                <br />
                { !evaluationExtraFields3
                  ? <Button onClick={this.addEvaluationExtraField} color="primary">Dodaj dodatnu provjeru</Button>
                  : null
                }
              </Typography>
              <Grid className={classes.marginTop5} container justify="center">
                { evaluationExtraFields
                  ? (
                    <Grid key={1} item xs={12}>
                      <Input name="evaluationExtraField1" label="1. Dodatno polje" value={evaluationExtraField1} onChange={this.handleChange} percentage />
                    </Grid>
                  ) : null
                }
                { evaluationExtraFields2
                  ? (
                    <Grid className={classes.marginTop5} key={2} item xs={12}>
                      <Input name="evaluationExtraField2" label="2. Dodatno polje" value={evaluationExtraField2} onChange={this.handleChange} percentage />
                    </Grid>
                  ) : null
                }
                { evaluationExtraFields3
                  ? (
                    <Grid className={classes.marginTop5} key={3} item xs={12}>
                      <Input name="evaluationExtraField3" label="3. Dodatno polje" value={evaluationExtraField3} onChange={this.handleChange} percentage />
                    </Grid>
                  ) : null
                }
              </Grid>
            </Grid>
          </Grid>
          <Divider light classes={{ root: classes.divider }} />
        </React.Fragment>
      );
    } else if (activeStep === 1) {
      dialogContent = (
        <React.Fragment>
          <Divider light classes={{ root: classes.dividerMarginBottom20 }} />
          <Typography classes={{ root: classes.marginBottom10 }} variant="title">Prosjeci ocjena srednje škole</Typography>
          <Typography classes={{ root: classes.caption }} variant="caption">Ovdje upišite prosjeke ocjena koje ste postigli tijekom {isMobile ? null : <br />} četiri razreda srednje škole</Typography>
          <Grid container justify="center">
            <Grid className={classes.marginTopMobile} item xs={12} lg={3}>
              <Input label="1. razred" name="percentageFirstGrade" onChange={this.handleChange} required value={percentageFirstGrade} />
            </Grid>
            <Grid className={classes.marginTopMobile} item xs={12} lg={3}>
              <Input label="2. razred" name="percentageSecondGrade" onChange={this.handleChange} required value={percentageSecondGrade} />
            </Grid>
            <Grid className={classes.marginTopMobile} item xs={12} lg={3}>
              <Input label="3. razred" name="percentageThirdGrade" onChange={this.handleChange} required value={percentageThirdGrade} />
            </Grid>
            <Grid className={classes.marginTopMobile} item xs={12} lg={3}>
              <Input label="4. razred" name="percentageFourthGrade" onChange={this.handleChange} required value={percentageFourthGrade} />
            </Grid>
          </Grid>
          <Divider light classes={{ root: classes.divider }} />
        </React.Fragment>
      );
    } else if (activeStep === 2) {
      dialogContent = (
        <React.Fragment>
          <Divider light classes={{ root: classes.dividerMarginBottom20 }} />
          <Typography classes={{ root: classes.marginBottom10 }} variant="title">Rezultati mature {evaluationExtraField1 ? 'i dodatnih provjera' : null}</Typography>
          <Typography classes={{ root: classes.caption }} variant="caption">Ovdje upišite rezultate koje ste postigli na {isMobile ? null : <br />} ispitima državne mature {evaluationExtraField1 ? 'i dodatnim provjerama' : null}</Typography>
          <Grid container justify="center">
            <Grid item xs={12} lg={3}>
              <Input label="Hrvatski jezik" name="percentageMaturaCroatian" onChange={this.handleChange} percentage required value={percentageMaturaCroatian} />
            </Grid>
            <Grid className={classes.marginTopMobile} item xs={12} lg={3}>
              <Input label="Matematika" name="percentageMaturaMathematics" onChange={this.handleChange} percentage required value={percentageMaturaMathematics} />
            </Grid>
            <Grid className={classes.marginTopMobile} item xs={12} lg={3}>
              <Input label="Engleski jezik" name="percentageMaturaEnglish" onChange={this.handleChange} percentage required value={percentageMaturaEnglish} />
            </Grid>
          </Grid>
          {evaluationMaturaElective1 ? <br /> : null}
          <Grid container justify="center">
            { evaluationMaturaElective1 !== ''
              ? (
                <Grid item xs={12} lg={3}>
                  <Input label="1. Izborni predmet" name="percentageMaturaElective1" onChange={this.handleChange} percentage required value={percentageMaturaElective1} />
                </Grid>
              ) : null
            }
            { evaluationMaturaElective2 !== ''
              ? (
                <Grid className={classes.marginTopMobile} item xs={12} lg={3}>
                  <Input label="2. Izborni predmet" name="percentageMaturaElective2" onChange={this.handleChange} percentage required value={percentageMaturaElective2} />
                </Grid>
              ) : null
            }
            { evaluationMaturaElective3 !== ''
              ? (
                <Grid className={classes.marginTopMobile} item xs={12} lg={3}>
                  <Input label="3. Izborni predmet" name="percentageMaturaElective3" onChange={this.handleChange} percentage required value={percentageMaturaElective3} />
                </Grid>
              ) : null
            }
          </Grid>
          {evaluationExtraField1 ? <br /> : null}
          <Grid container justify="center">
            { evaluationExtraField1 !== ''
              ? (
                <Grid item xs={12} lg={3}>
                  <Input label="1. Dodatno polje" name="percentageExtraField1" onChange={this.handleChange} percentage required value={percentageExtraField1} />
                </Grid>
              ) : null
            }
            { evaluationExtraField2 !== ''
              ? (
                <Grid className={classes.marginTopMobile} item xs={12} lg={3}>
                  <Input label="2. Dodatno polje" name="percentageExtraField2" onChange={this.handleChange} percentage required value={percentageExtraField2} />
                </Grid>
              ) : null
            }
            { evaluationExtraField3 !== ''
              ? (
                <Grid className={classes.marginTopMobile} item xs={12} lg={3}>
                  <Input label="3. Dodatno polje" name="percentageExtraField3" onChange={this.handleChange} percentage required value={percentageExtraField3} />
                </Grid>
              ) : null
            }
          </Grid>
          <Divider light classes={{ root: classes.divider }} />
        </React.Fragment>
      );
    } else if (activeStep === 3) {
      const totalGradePoints = Math.round((percentagesTotal / 4).toFixed(2) / 5 * evaluationSchoolGrades * 10);
      const totalMaturaPoints = pointsMaturaEnglish + pointsMaturaCroatian + pointsMaturaElective1 + pointsMaturaElective2 + pointsMaturaElective3 + pointsMaturaMathematics + pointsExtraField1 + pointsExtraField2 + pointsExtraField3;

      dialogContent = (
        <React.Fragment>
          <Divider light classes={{ root: classes.dividerMarginBottom20 }} />
          <Typography classes={{ root: classes.marginBottom10 }} variant="title">Rezultati:</Typography>
          <Divider light classes={{ root: classes.divider }} />
          <Table props={{ evaluationExtraField1, evaluationExtraField2, evaluationExtraField3, evaluationMaturaElective1, evaluationMaturaElective2, evaluationMaturaElective3, percentagesTotal, pointsExtraField1, pointsExtraField2, pointsExtraField3, pointsMaturaCroatian, pointsMaturaElective1, pointsMaturaElective2, pointsMaturaElective3, pointsMaturaEnglish, pointsMaturaMathematics, totalGradePoints }} />
          <Typography justify="center" classes={{ root: classes.marginTop20 }} variant="title">Ukupan broj bodova: {totalMaturaPoints + totalGradePoints}</Typography>
          <BarChart height="100px" max={1000} data={[['Broj bodova', totalMaturaPoints + totalGradePoints]]} />
          <Divider light classes={{ root: classes.divider }} />
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        {/* <div style={{ display: 'flex', flex: 3 }}> */}
        <Grid justify="center" container>
          {/* style={!isMobile ? { justifyContent: 'space-around', flex: 2 } : null} */}
          <Grid item xs={12} sm={9} md={6} lg={8} xl={6}>
            {/* style={{ marginLeft: '13%' }} */}
            <Paper className={classes.paper} elevation={8}>
              <div className={classes.heading}>
                <Typography classes={{ root: classes.headingTypography }} variant="headline">Kalkulator bodova za upis na fakultet</Typography>
                <img src={logo} className={classes.icon} alt="calculator-icon" />
              </div>
              <ValidatorForm noValidate onSubmit={this.handleClick}>
                {dialogContent}
                <Stepper activeStep={activeStep} />
                { activeStep === 3
                  ? <Button onClick={this.handleBack} fullWidth size="large" variant="contained" color="primary">Na početak</Button>
                  : <Button type="submit" fullWidth size="large" variant="contained" color="primary">{activeStep === 2 ? 'Završi' : 'Dalje'}</Button>
                }
              </ValidatorForm>
              <br />
              <Typography className={classes.copyright} variant="caption">
              Copyright 2018 © <a className={classes.anchor} href="https://www.linkedin.com/in/adrian-hajdin">Adrian Hajdin.</a> All Rights Reserved.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        {/* {!isMobile ? (
          <Grid style={{ flex: 1 }} item xs={2}>
            <img alt="reklama" src="https://lh4.ggpht.com/ike-jviZQ32RHuhkwLcAt_9vdpBX1oWKU00NX7QRe5GPl7-5sapzZ0u91_ssg_-Ednak2Hj-Hg=w162" className="commercial" />
          </Grid>
        ) : null} */}
      </React.Fragment>
    // </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(App);
