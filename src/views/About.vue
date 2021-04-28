<template>
  <div class="about">
    <h1>Minimum number</h1>
    <input v-model.number="minA">
    <input v-model.number="minB">
    <button v-on:click="min()">Min</button>
    {{minAnswer}}
    <h1>Maximum number</h1>
    <input v-model.number="maxA">
    <input v-model.number="maxB">
    <button v-on:click="max()">Max</button>
    {{maxAnswer}}
    <h1>Absoluite number</h1>
    <input v-model.number="number">
    <button v-on:click="abs()">Abs</button>
    {{absAnswer}}
    <h1>isEven</h1>
    <input v-model.number="number">
    <button v-on:click="isEven()">Is it even?</button>
    {{isEvenAnswer}}
    <h1>Minimum of 3 numbers</h1>
    <input v-model.number="minA">
    <input v-model.number="minB">
    <input v-model.number="minC">
    <button v-on:click="min3()">Min3</button>
    {{min3Answer}}
    <h1>Maximum of 3 numbers</h1>
    <input v-model.number="maxA">
    <input v-model.number="maxB">
    <input v-model.number="maxC">
    <button v-on:click="max3()">Max3</button>
    {{max3Answer}}
  </div>
</template>
<script>

function min(){
  if(this.minA < this.minB){
    this.minAnswer = this.minA;
  } else{
    this.minAnswer = this.minB;
  }
}
export default {
  data: function(){
    return{
      'minA': 0,
      'minB': 0,
      'minAnswer': 0,
      'maxA': 0,
      'maxB': 0,
      'maxAnswer': 0,
      'number': 0,
      'absAnswer': 0,
      'isEvenAnswer': 0,
      'minC': 0,
      'min3Answer': 0,
      'maxC': 0,
      'max3Answer': 0
    }
  },
  methods:{
    'min': min,
    'max': max,
    'abs': abs,
    'isEven': isEven,
    'min3': min3,
    'max3': max3
  }
}

function max(){
  if(this.maxA > this.maxB){
    this.maxAnswer = this.maxA;
  } else{
    this.maxAnswer = this.maxB;
  }
}

function abs(){
  if(this.number >= 0){
    this.absAnswer = this.number;
  } else if (this.number < 0){
    this.absAnswer = -this.number;
  }
}

function isEven(){
  this.isEvenAnswer = this.number %2 == 0;
}

function min3(){
  if(this.minA <= this.minB && this.minA <= this.minC){
    this.min3Answer = this.minA;
  } else if (this.minB <= this.minC && this.minB <= this.minA){
    this.min3Answer = this.minB;
  } else{
    this.min3Answer = this.minC;
  }
}

function max3(){
  if(this.maxA >= this.maxB && this.maxA >= this.maxC){
    this.max3Answer = this.maxA;
  } else if (this.maxB >= this.maxC && this.maxB >= this.maxA){
    this.max3Answer = this.maxB;
  } else{
    this.max3Answer = this.maxC;
  }
  //this.max3Answer = max(max(this.maxA, this.maxB), this.maxC); ei tööta
}

</script>