/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: mingbo.zhang@hand-china.com
 * @Date: 2020-08-28 16:22:58
 * @LastEditors: mingbo.zhang@hand-china.com
 * @LastEditTime: 2020-08-28 16:33:19
 */
import React from 'react';
import Toobar from './Toobar.js'

const ThemeContext = React.createContext('light');
class Demo extends React.Component {
  render() {
    return(
      <ThemeContext.Provider value='dark'>
        <Toobar></Toobar>
      </ThemeContext.Provider>
    )
  }
}
export default Demo;