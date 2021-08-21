import React, { Component } from 'react';

class Title extends Component {
        styles = {
                title: {
                        color: `${this.props.color}`,
                        fontFamily: 'Forum',
                        fontSize: `${this.props.fontSize}`,
                        marginBottom: '25px',
                        fontWeight: '400'
                },
                underlined: {
                        backgroundColor: '#710707',
                        textDecoration: 'underline',
                        width: `${this.props.width}`,
                        height: '3px',
                        marginBottom: `${this.props.marginFromLine}`
                },
                notUnderlined: {
                        display: 'none'
                }
        }

        render() {
                return(
                        <>
                        <h2 style={this.styles.title}>{this.props.label}</h2>
                        <div style={this.props.underlined ? this.styles.underlined : this.styles.notUnderlined}></div>
                        </>
                )
        }
}

Title.defaultProps = {
        color: 'white',
        fontSize: '80px',
        underlined: false,
        thickLine: '3px',
        marginFromLine: '25px',
        width: '100%'
}

export default Title;