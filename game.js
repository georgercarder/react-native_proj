import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import Board from './board';
import Navbar from './navbar';

export default class Game extends React.Component {
  constructor(props){
    super(props),
    this.state={
      prepuzzle: this.props.puzzles[Math.floor(Math.random()*30)].puzzle,
      rank: 2,
      prerank: 2,
      difficulty: 5,
      predifficulty: 5,
      squares: Array(16).fill(null),
      red: Array(16).fill(null),
      win: false,
      message: null,
      startorclear: 'start',
      started: 0,
      puzzles: this.props.puzzles,
    }
  }

  setRank() {
    if(this.state.prerank===2){
      this.setState({prerank: 3})  
    } else {
      this.setState({prerank: 2})  
    }  
  }

  setDiff(){
    var predifficulty = this.state.predifficulty
    this.setState({predifficulty: (predifficulty%6)+1})
  }

  load(){
    this.findPuzzle(this.state.prerank,this.state.predifficulty);
    this.setState({
      rank: this.state.prerank,
      difficulty: this.state.predifficulty,
      /*squares,red:Array(this.state.prerank**4).fill(null)*/
      win: false,
      message: null,
      startorclear: 'start',
      started: 0,
     })
     setTimeout(function() {this.start()}.bind(this),1)
    }

    findPuzzle(rank,diff){
      var l = this.state.puzzles.length
      var found = false
      var r = 0
      while(found === false){
        r = Math.floor(Math.random()*l)
        if(this.state.puzzles[r].rank===rank && this.state.puzzles[r].difficulty===diff){
          this.setState({prepuzzle: this.state.puzzles[r].puzzle.slice()})
          found = true
        }
      }
    }
  
  start(){
    if(this.state.startorclear==='start'){
      const red=this.state.red.slice()
      const squares= this.state.squares.slice();
      var puzzle=this.state.prepuzzle;
      for(var i=0;i<this.state.rank**4;i++){
        if(puzzle[i]!==0){
          squares[i]=puzzle[i]
          red[i]=puzzle[i]
        } else {
          squares[i]=null
          red[i]=null
        }
      }
      this.setState({squares: squares, red: red, started: 1, startorclear: "clear",});
    } else {
      this.setState({
      squares: Array(this.state.rank**4).fill(null),
      red: Array(this.state.rank**4).fill(null),
      win: false,
      checking: 0,
      message: null,
      startorclear: 'start',
      started: 0,
      });
    }
  }

  handlePress(i) {
    const squares = this.state.squares.slice();
    squares[i]=(squares[i]%this.state.rank**2)+1;
    this.setState({squares: squares});
  }

  gamestatus(){
    if(this.state.started!==1){
      return (<Text> Push 'start' to start game </Text>)  
    } else if (this.state.win===false&&this.state.message!==1){
      return (<Text> game in progress </Text>)  
    } else if (this.state.win===false&&this.state.message===1){
      return (<Text> nope, keep trying </Text>)  
    } else {
      return (<Text> SUDOKU WINNER! </Text>)  
    }  
  }

  gamecheck(){
    var SQUARES=this.state.squares.slice()
    var rank=this.state.rank
    var decision=true

    //rows
    let set = new Set()
    for(var i=0;i<(rank**2);i++){
      set.clear()
      for(var j=0;j<=(rank**2);j++){
        set.add(SQUARES[j+i*(rank**2)])
      }
      if(set.size<(rank**2)){
        decision=false
        break
      }
    }
    //cols
    for(var j=0;j<(rank**2);j++){
      set.clear()
      for(var i=0;i<=(rank**2);i++){
        set.add(SQUARES[j+i*(rank**2)])
      }
      if(set.size<(rank**2)){
        decision=false
        break
      }
    }
    //boxes
    var b = 0
    let box = new Set()
    while(b<rank**2){
      for(var i=0;i<rank;i++){
        for(var j=0;j<rank;j++){
          box.clear()
          for(var ii=rank*i;ii<rank*(i+1);ii++){
            for(var jj=rank*j;jj<rank*(j+1);jj++){
              box.add(SQUARES[jj+(rank**2)*ii])
              b=b+1
            }
          }
          if(box.size<(rank**2)){
            decision=false
            break
          }
        }
        if(decision===false){
          break
        }
      }
      if(decision===false){
        break
      }
    }
    if( decision===true ){
      this.setState({win: true, red: this.state.squares});
    } else {
      this.setState({win: false, message:1});
      setTimeout(function() {this.setState({message: 2})}.bind(this),1200)
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Sudoku Sunshine</Text>
        </View>
        <View style={styles.body}>
          <Text style={styles.status}>{this.gamestatus()}</Text>
          <View style={{'width':this.state.gameWidth}}>
            <Board 
              rank={this.state.rank}
              red={this.state.red}
              squares={this.state.squares}
              onPress={(i) => this.handlePress(i)}
            />
          </View>
        </View>
        <View style={styles.subfooter}>
          <Navbar
						prerank={this.state.prerank}
						predifficulty={this.state.predifficulty}
						setRank={() => this.setRank()}
						setDiff={() => this.setDiff()}
						load={() => this.load()}
            gamecheck={() => this.gamecheck()}
            start={() => this.start()}
						startorclear={this.state.startorclear}
            />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#87CEEB',
  },

  body: {
    /*width: 300,*/
    /*height: 300,*/
    flex: 9,
    backgroundColor: '#87CEEB',
    alignItems: 'center',
    margin: 10,
  },

  header: {
    flex: 1.5,
    backgroundColor: '#87CEEB',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },

  title: {
    fontSize: 42,
    color: '#FEFDE3',
  },

  subfooter: {
    flex: 3,
    width: 320,
  },

  footer: {
    flex: .2,
    backgroundColor: 'black',
    width: 248,
  },

  status: {
    fontSize: 22,
    color: '#FEFDE3', 
    padding: 10,
    textAlign: 'center',
  },

});
