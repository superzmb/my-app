/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: mingbo.zhang@hand-china.com
 * @Date: 2020-08-28 16:28:59
 * @LastEditors: mingbo.zhang@hand-china.com
 * @LastEditTime: 2020-08-28 16:52:58
 */
import React from 'react';

const ThemeContext = React.createContext('light');
class ThemeButton extends React.Component {
  static contextType = ThemeContext;
  render(){
    return(
    <button>{this.context}</button>
    )
  }
}
export default ThemeButton;