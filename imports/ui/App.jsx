import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import { Tasks } from '../api/tasks.js';
 
import Task from './Task.jsx';

// App component - represents the whole app
class App extends Component {

	constructor(props) {
		super(props);
		//this.lastEventClick = "vide";
	  }


	//Appellée lors de l'appui sur entrée
	handleSubmit(event) {
	 
		//alert('submit');
		event.preventDefault();
		
		textField = ReactDOM.findDOMNode(this.refs.textInput); 
		
		if(App.modificationmode == "addevent")
		{
	 
			//alert('mode ajout - date : ' + $('#dateform').val());
			//Recuperation du champs text
			text = textField.value.trim();
			
			//$('#dateform').val(date.format());
		 
			//TODO : UPDATE LES EVENTS (AJOUT EVENT)
			oneTask = Tasks.insert({
			  text:text,
			  dateevent: $('#dateform').val() 
			});
	
		}
		else
		{
		
			
			//$('#calendar').fullCalendar( 'updateEvent', App.lastEventClick );
		
			//alert('mode update');
			//TODO : UPDATER LA COLLECTION DES EVENT
			
			Tasks.update(
			  App.lastEventClick.id,
			  { $set: { text:textField.value,  dateevent: $('#dateform').val()} }
			  

			);
			
		}
		
		//On cache les elements du formulaire
		$('#deleteeventform').hide();
		$('#updateeventform').hide();
		$('#idevent').hide();
		
		//On vide le champ texte
		textField.value = '';
		
		//On repasse en mode ajout d'evenement
		App.modificationmode = "addevent";
	}

	
 
	renderTasks() {
		//alert('props.tasks : ' + this.props.tasks.length);
		
		//On vide tous les evenements
		$('#calendar').fullCalendar('removeEvents');
		
		//Et on les recreer pour syncrhoniser avec la collection
		for(var i=0; i<this.props.tasks.length; i++)
		{
		//alert('this.props.tasks[i]._id : ' + this.props.tasks[i]._id);
			newevent = 
			{
				id: this.props.tasks[i]._id,
				_id: this.props.tasks[i]._id,
				title: this.props.tasks[i].text,
				start: this.props.tasks[i].dateevent,
				_start: this.props.tasks[i].dateevent,
				allDay: true,
				editable: false
				//idAgent: 1000,
			};
			$('#calendar').fullCalendar('renderEvent', newevent, true);
			
		}
		$('#calendar').fullCalendar('rerenderEvents');
	
			
		return this.props.tasks.map((task) => (
		  <Task key={task._id} task={task} />
		  
		));
	}
	
	deleteEvent(event) {
		//alert('fonction delete event ' + App.lastEventClick.id);
		
		//On supprime l evenement de la collection
		Tasks.remove(App.lastEventClick.id);
	
		//On supprime l evenement du calendrier
		//$('#calendar').fullCalendar( 'removeEvents', App.lastEventClick.id );
		
		//On met a jour le rendu
		//renderTasks();
			
		//On reinit l event cliqué
		App.lastEventClick = null;
		
		//On cache les elements du formulaire
		$('#deleteeventform').hide();
		$('#updateeventform').hide();
		$('#idevent').hide();
		
		//On repasse en mode ajout d'evenement
		App.modificationmode = "addevent";
		
		//On vide le champ texte
		ReactDOM.findDOMNode(this.refs.textInput).value = '';
	}
	
 
	render() {
		return (
			<div className="container">
				<header>
				<input size="5"  
					  disabled="disabled"
					  type="text"
					  id="idevent"
					  ref="idevent"
					  value=""
					  style={{ display: 'none' }}
					/>
					
				  <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
					<input size="130"
					  type="text"
					  id="textInput"
					  ref="textInput"
					  placeholder="Entrez le libell&eacute; de l'&eacute;v&egrave;nement..."
					/>
					</form>
					<input size="20"  
					  disabled="disabled"
					  type="text"
					  id="dateform"
					  ref="dateform"
					  value="2017-06-01"
					/>
					
				</header>
				<button type="button" size="35"
					  type="text"
					  id="deleteeventform"
					  ref="deleteeventform"
					  onClick={this.deleteEvent.bind(this)}
					  style={{ display: 'none' }}
					
					>Supprimer l'&eacute;v&egrave;nement s&eacute;lectionn&eacute;</button>
				{/*<button type="button" size="35"
				  type="text"
				  id="updateeventform"
				  ref="updateeventform"
				  onClick={this.updateEvent.bind(this)}
				  style={{ display: 'none' }}
				
				>Mettre &agrave; jour le libell&eacute; de l'&eacute;v&egrave;nement</button>
						
				*/
				}
				<ul>
				  {this.renderTasks()}
				</ul>
				
				<div id='calendar' ref="calendar"></div>
			</div>
		);
		
		

	}
}
App.modificationmode = "addevent";
App.lastEventClick = null;


App.propTypes = {
  tasks: PropTypes.array.isRequired,
};

 
export default createContainer(() => {
  return {
	 tasks: Tasks.find({}, { sort: { text: "desc" } }).fetch(),
  };
}, App);



$(document).ready(function() {

//alert('ready');

    // page is now ready, initialize the calendar...

$('#calendar').fullCalendar({
	defaultView: 'month'
	, dayClick:  function(date, jsEvent, view, resourceObj) {
	
	//$('#calendar').fullCalendar( 'removeEvents' );
	
        //alert('click sur un jour ! ' + date.format());
		/*if(App.lastEventClick!=null)
		{
			App.lastEventClick = jsEvent;
		}
		*/
		
		$('#dateform').val(date.format());
		
    }
	, eventClick: function(calEvent, jsEvent, view) {

        //alert('Event: ' + calEvent.title);
		//alert('Event id: ' + calEvent.id);
        //alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);
        //alert('View: ' + view.name);
		//alert('App.lastEventClick: ' + App.lastEventClick);
		
		//Memorisation du derniere evenement clické
		App.lastEventClick = calEvent;
		
		$('#textInput').val(calEvent.title);
		
		
		//var myDate = moment().calendar(calEvent.start, 'YYYY-MM-DD'); 
		
		var myDate = moment(calEvent.start).format('YYYY-MM-DD'); 
		
		//alert('myDate : '+myDate);
		$('#dateform').val(myDate);

        // change the border color just for fun
        $(this).css('border-color', 'red');
		
		//Affichage des composants du formulaire de modification des evenements
		$('#deleteeventform').show();
		$('#updateeventform').show();
		$('#idevent').show();
		
		$('#idevent').val(App.lastEventClick.id);
		
		App.modificationmode = "editevent";
		

    }
	, visibleRange: {
        start: '2017-06-01',
        end: '2017-06-25'
    }
	, 			header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,basicWeek,basicDay'
			},
			defaultDate: '2017-06-06',
			navLinks: true, // can click day/week names to navigate views
			editable: false,
			eventLimit: true, // allow "more" link when too many events
			/* events: [
				/*{
					id: 1,
					title: 'Premier event',
					start: '2017-06-04'
				},
				{
					id: 2,
					title: 'deuxieme event',
					start: '2017-06-07',
				},
				{
					id: 3,
					title: 'troisieme event',
					start: '2017-06-11',
				}
				
			]*/

	
    });
});

