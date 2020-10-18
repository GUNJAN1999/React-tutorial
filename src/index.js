//import the react and react dom library
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

//create a react component
 const App=()=>{
	 return (
	 <div className="ui container comments">
		 <ApprovalCard>
			<CommentDetail 
				author="sam"
				timeAgo="TODAY 6:00pm"
				content="NICE!!!"
				avatar={faker.image.avatar()}
			/>
		 </ApprovalCard>
		 <ApprovalCard>
			<CommentDetail 
				author="alex"
				timeAgo="TODAY 6:00pm"
				content="GOOD!!!"
				avatar={faker.image.avatar()}
			/>
		</ApprovalCard>
	 </div>
	 );
 };

//take the react component and show it on screen
ReactDOM.render(<App/>,document.querySelector("#root"));
