module.exports =function()
{
  var faker = require("faker/locale/en");
  var _=require("lodash");
  return{
    Movies:_.times(100,function(i){
      return{
        id:i,
        Language:faker.finance.currencyName(),
        Location:faker.address.city(),
        Plot:faker.lorem.sentences(),
        Poster:faker.image.image(),
        SoundEffects: [
          faker.system.mimeType(),
          faker.system.mimeType()
        ],
        Stills: [
          faker.image.image(),
          faker.image.image(),
          faker.image.image()
        ],
        Title: faker.company.companyName(),
        imdbID: i,
        listingType:faker.hacker.verb(),
                imdbRating: faker.random.float()
      }
    })
  }
}
