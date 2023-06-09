const Course = require("../models/Course");
const { mongooseToObject } = require("../../util/mongoose");

class CourseController {
  // GET, /courses/:slug
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then(course => {
        res.render('courses/show', {course: mongooseToObject(course)})
      })
      .catch(next);

  }


  // GET, /courses/create
  create(req, res, next) {
    res.render('courses/create');
  }

  // POST, /courses/store
  store(req, res, next) {
    // res.json(req.body);
    const formData= req.body;
    formData.img= 'https://image.nhandan.vn/Uploaded/2023/athlrainagbna/2023_03_08/tri-tue-nhan-tao-ai-2-3436.jpg';
    const course= new Course(formData);
    course.save()
    .then(()=> res.redirect('/'))
    .catch(error=> {});
  }

  // GET, /courses/:id/edit
  edit(req, res, next) {
    Course.findById(req.params.id )
      .then(course => {
        res.render('courses/edit', {course: mongooseToObject(course)})
      })
      .catch(next);

  }

  
  // PUT, /courses/:id
  update(req, res, next) {
    // res.json(req.body);
    Course.updateOne({ _id: req.params.id}, req.body)
    .then(()=> res.redirect('/me/stored/courses'))
    .catch(next);
    // const formData= req.body;
    // formData.img= 'https://image.nhandan.vn/Uploaded/2023/athlrainagbna/2023_03_08/tri-tue-nhan-tao-ai-2-3436.jpg';
    // const course= new Course(formData);
    // course.save()
    // .then(()=> res.redirect('/'))
    // .catch(error=> {});
  }

  //DELETE /courses/:id
  delete(req, res, next){
    Course.deleteOne({ _id: req.params.id}, req.body)
    .then(()=> res.redirect('back'))
    .catch(next);
  }

}

module.exports = new CourseController();
