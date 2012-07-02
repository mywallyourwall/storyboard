describe("Story", function() {
  var story,
  options = {
        'name' : 'My Story',
        'desc' : 'This is a new story'
      },
  chapter;


  beforeEach(function() {
      story = new Story(options);
  });

  it("name and desc should be set", function() {
    expect(story.name).toEqual(options.name);
    expect(story.desc).toEqual(options.desc);
  });


  it("should be able to add chapter", function() {
    expect(story.getChapters().length).toEqual(0);
    story.addChapters(new Chapter({}));
    expect(story.getChapters().length).toEqual(1);
  });

  it("should be able to add array of chapters", function() {
    expect(story.getChapters().length).toEqual(0);
    story.addChapters([new Chapter({}), new Chapter({})]);
    expect(story.getChapters().length).toEqual(2);
  });

});




