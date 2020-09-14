import React, { Component } from 'react';
import 'dhtmlx-scheduler';
import 'dhtmlx-scheduler/codebase/dhtmlxscheduler_material.css';
import './Scheduler.css' ;
import 'dhtmlx-scheduler/codebase/ext/dhtmlxscheduler_agenda_view'
import 'dhtmlx-scheduler/codebase/ext/dhtmlxscheduler_container_autoresize'

const scheduler = window.scheduler;
scheduler.xy.scale_width =100;
scheduler.config.separate_short_events = true;
export default class Scheduler extends Component {
    componentDidMount() {
        scheduler.skin = 'material';
        scheduler.config.header = [
            'day',
            'week',
            'month',
            'date',
            'prev',
            'today',
            'next',
            'agenda',
           
        ];
        const date = new Date;
        const { events } = this.props;
      
        scheduler.init(this.schedulerContainer, new Date(date));
        
        scheduler.clearAll();
        scheduler.parse(events);    
    }

    
    render() {
        return (
            <div
                ref={ (input) => { this.schedulerContainer = input } }
                style={ { width: '100%', height: '100%' } }>
                    
            </div>

            
            
            
       );
    }
}