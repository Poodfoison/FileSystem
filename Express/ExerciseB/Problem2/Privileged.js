const e = require('express')
const express = require('express')
const app = express()
const bodyParser = require('body-parser'); 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.json())
app.use(setUser)

const userList = [
	{ id: 0,  priviledges: ['MASTER'] },
	{ id: 1,  priviledges: ['VIEW'] },
	{ id: 2,  priviledges: ['VIEW', 'INSERT', 'MODIFY', 'DELETE'] },
	{ id: 3,  priviledges: ['VIEW', 'DELETE'] },
	{ id: 4,  priviledges: ['VIEW', 'INSERT'] },
	{ id: 5,  priviledges: ['VIEW'] },
	{ id: 6,  priviledges: ['MASTER'] },
	{ id: 7,  priviledges: ['MASTER'] },
	{ id: 8,  priviledges: ['VIEW'] },
	{ id: 9,  priviledges: [] },
	{ id: 10, priviledges: [] },
	{ id: 11, priviledges: ['VIEW', 'INSERT', 'MODIFY'] },
	{ id: 12, priviledges: ['VIEW', 'MODIFY'] },
	{ id: 13, priviledges: ['VIEW'] },
	{ id: 14, priviledges: ['VIEW', 'DELETE'] },
	{ id: 15, priviledges: ['VIEW'] }
]

/* ==== Do not modify ==== */
/* These are used to generate a simple id */

let curID = 0
const getID = (req, res, next) => {
	req.userID = curID
	curID = (curID + 7) % 16;	
	next()
}

app.use(getID)

/* ==== Do not modify ==== */

// Create necessary middlewares
// ADD CODE HERE


const authID = (req, res, next) => {
    if (req.userID < 0) {
		res.status(403)
		return res.send('Enter Id')
	  }
	  
    next()
	
}

const priviledge = (permission)  => {
    return (req, res, next) => {
		userList.forEach(data => {
			if (data.id === req.userID) {
				//do logic here
				userRole = data.priviledges
				console.log(req.userID)
				console.log(permission)
				console.log(userRole)
				let booleanValue = false

				for (let i = 0; i < userRole.length; i++) {
					const currentRole = permission[i];
					permission.forEach(currentpermission => {
						if (currentRole === currentpermission){
							booleanValue = true;
						}
					
					});
				}
				if (booleanValue) {
					next()
			
				  }
				  else {
					res.status(401)
					return res.send('Not Authorized')
				  }

				
			
				}
			})
			  }
			}
			






// Add at least 4 API endpoints with different methods
// ADD CODE HERE

app.get('/', (req, res) => {
    res.send("Home");
});

app.get('/view', authID, priviledge(["MASTER", "VIEW"]),  (req, res) => {
    res.send("View");
});

app.get('/insert', authID, (req, res) => {
    res.send("Insert");
});

app.get('/modify', authID, (req, res) => {
    res.send("Modify");
});

app.get('/delete', authID, (req, res) => {
    res.send("Delete");
});

function setUser(req, res, next) {
	const id = req.body.id
	if (id) {
	  req.user = userList.find(user => user.id === id)
	}
	next()
  }



app.listen(8000, () => console.log('Listening at port 8000'))



//cd Express/ExerciseB/Problem2