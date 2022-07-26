class Search {

  constructor(){
    this.searchs = []
  }

  addSearch( data ){
    this.searchs.push( data )
    return this.searchs;
  }

  getSearch(){
    return this.searchs;
  }

}

module.exports = {
  Search
}