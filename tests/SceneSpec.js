describe("Scene", function() {
  var scene,
  options = {
        'name' : 'My Scene',
        'desc' : 'This is a new scene'
      },
  character,
  setting;

  beforeEach(function() {
      scene = new Scene(options);
  });


  it("name and desc should be set", function() {
    expect(scene.name).toEqual(scene.name);
    expect(scene.desc).toEqual(scene.desc);
  });


  it("should be able to add characters", function() {
    character = new Character({'name' : 'Bob'});
    expect(scene.getCharacters().length).toEqual(0);
    scene.addCharacter(character);
    expect(scene.getCharacters().length).toEqual(1);
    expect(scene.getCharacters()).toContain(character);
  });


  it("should be able to set setting", function() {
    expect(scene.getSetting()).toBeNull();
    var setting = new Setting({'name' : 'setting123'});
    scene.setSetting(setting);
    expect(scene.getSetting()).toEqual(setting);
  });

});


