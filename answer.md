# Short-Answer Questions

## Q1 – Leveraging AI in Front-End Delivery

"Describe, with concrete examples, how you would use AI-powered coding or design assistants to accelerate front-end development in a startup where shipping fast matters but code quality can't slip."

### Answer:

In a fast-paced startup environment, I would strategically integrate AI tools at key points in the development workflow to maintain velocity without compromising quality:

**For Component Development:**
I would use GitHub Copilot or Claude to scaffold repetitive UI components. For instance, when needing a complex form with validation, I'd prompt: "Create a React order form component with address fields, payment method selection, and Formik validation." This typically saves 1-2 hours per component while maintaining consistent patterns.

**For CSS/Styling:**
I'd leverage AI to generate baseline Tailwind CSS classes from design mockups. Example: inputting a Figma URL to an AI tool like V0 to generate the initial responsive layout code, then manually refining for performance and accessibility.

**For Testing:**
AI excels at generating comprehensive test cases. I'd use it to create Jest/RTL unit tests by prompting: "Write tests for this UserProfile component covering loading states, API errors, and user interaction flows." This ensures test coverage doesn't get sacrificed when deadlines loom.

**For Code Review:**
I'd implement an AI-powered pre-commit hook that analyzes code for potential issues (performance bottlenecks, accessibility violations, security risks) before human review. This creates a safety net without adding manual overhead.

The key is using AI for initial generation and repetitive tasks while preserving human oversight for architecture decisions, performance optimization, and UX refinement – areas where human judgment remains superior.

## Q2 – Inventing an AI Feature for Class 11 Students

"You're tasked with designing a new AI feature that makes Physics revision easier for Indian class 11 students. Outline two key features and sketch the user journey in plain text."

### Answer:

### Feature 1: Physics Concept Visualizer

This feature transforms abstract Physics concepts into interactive 3D visualizations tailored to the NCERT curriculum.

**User Journey:**
1. Student encounters a challenging concept like "Projectile Motion" in Chapter 4 (Motion in a Plane).
2. They open the app and either snap a photo of the textbook page or search for "projectile motion."
3. The AI generates an interactive 3D visualization showing the parabolic path with adjustable parameters (initial velocity, angle, gravity).
4. As the student manipulates variables, equations update in real-time showing how they affect the trajectory.
5. The app highlights connections to Board exam questions, showing how changing parameters maps to different problem types they'll encounter.
6. Student can save custom configurations to revisit during exam preparation.

### Feature 2: Personalized Problem-Solving Coach

This feature analyzes the student's solution approach to physics numerical problems and provides tailored guidance.

**User Journey:**
1. Student is struggling with a numerical problem from Thermodynamics (Chapter 12).
2. They write their partial solution on paper and scan it with the app.
3. The AI analyzes their work, identifying the specific conceptual gap (e.g., confusing isothermal vs. adiabatic processes).
4. The app provides a targeted micro-lesson (2-3 minutes) specifically addressing this confusion point.
5. It then offers a guided step-by-step approach to completing the problem, asking questions that lead the student to discover the solution themselves.
6. After successful completion, the app suggests similar problems that reinforce the newly mastered concept, adapting to the student's learning pace.
7. Progress is tracked across the NCERT syllabus, automatically prioritizing concepts that need additional reinforcement based on error patterns.
8. The app generates personalized revision schedules as Board exams approach, focusing on historically challenging areas identified from the student's practice sessions.