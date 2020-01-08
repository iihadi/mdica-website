import React from 'react'
import prayertimes from './assets/json/prayertimes.json'
import { JsonToTable } from 'react-json-to-table'


export const Timetable = () => (
  <div>
  <JsonToTable json={prayertimes}></JsonToTable>
  </div>
)
