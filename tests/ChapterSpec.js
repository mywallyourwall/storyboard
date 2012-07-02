describe("Chapter", function() {
  var chapter,
  options = {
        'name' : 'My Chapter',
        'desc' : 'This is a new chapter'
      },
    scene;

  beforeEach(function() {
      chapter = new Chapter(options);
  });


  it("name and desc should be set", function() {
    expect(chapter.name).toEqual(options.name);
    expect(chapter.desc).toEqual(options.desc);
  });


  it("should be able to add scene", function() {
    expect(chapter.getScenes().length).toEqual(0);
    chapter.addScenes(new Scene({}));
    expect(chapter.getScenes().length).toEqual(1);
  });

  it("should be able to add array of scenes", function() {
    expect(chapter.getScenes().length).toEqual(0);
    chapter.addScenes([new Scene({}), new Scene({})]);
    expect(chapter.getScenes().length).toEqual(2);
  });
});


