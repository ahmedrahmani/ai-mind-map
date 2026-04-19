
        // ------------------------------------------------------------------
        // FULLY RESTRUCTURED HIERARCHICAL AI KNOWLEDGE TREE
        // - Main branches under AI: History, Math, Core AI (Symbolic/KR), Machine Learning,
        //   NLP, Computer Vision, Robotics, Multimodal, Safety/Ethics, Infrastructure, Applications, Future.
        // - Machine Learning → Deep Learning → AI Agents (logical depth)
        // - Each branch enriched with 3–6 levels of subtopics
        // ------------------------------------------------------------------

        const C = {
            root: "#7F77DD", hist: "#D85A30", math: "#BA7517", core: "#D4537E", ml: "#1D9E75",
            dl: "#378ADD", rl: "#2C9B6E", nlp: "#D85A30", cv: "#BA7517", rob: "#639922",
            mm: "#1D9E75", safety: "#E24B4A", ethics: "#888780", inf: "#378ADD", app: "#639922",
            future: "#534AB7", ag: "#7F77DD"
        };

        const T = [{
            id: "root", c: "root", l: "Artificial Intelligence", s: "Complete hierarchical mind map",
            ch: [
                // ─────────────────────────────────────────────────────────
                // 1. HISTORY & PHILOSOPHICAL FOUNDATIONS
                // ─────────────────────────────────────────────────────────
                {
                    "id": "hist",
                    "c": "hist",
                    "l": "History & Philosophical Roots of AI",
                    "ch": [
                        {
                        "id": "hist_pre",
                        "l": "Pre‑AI Intellectual Roots",
                        "ch": [
                            { "id": "hist_pre_logic", "l": "Formal logic – Aristotle, Boole, Frege", "hw": "N/A", "tool": "None (conceptual)", "dev": "Aristotle (384–322 BCE), George Boole (1815–1864), Gottlob Frege (1848–1925)" },
                            { "id": "hist_pre_mech", "l": "Mechanical computation – Babbage, Lovelace", "product": "Difference Engine, Analytical Engine (designs)", "dev": "Charles Babbage (1791–1871), Ada Lovelace (1815–1852)" },
                            { "id": "hist_pre_cyber", "l": "Cybernetics – Wiener (1948)", "product": "Cybernetics (book)", "dev": "Norbert Wiener (1894–1964)", "tool": "None" },
                            { "id": "hist_pre_info", "l": "Information theory – Shannon (1948)", "product": "A Mathematical Theory of Communication", "dev": "Claude Shannon (1916–2001)", "tool": "None" },
                            { "id": "hist_pre_turing", "l": "Turing's universal machine (1936)", "product": "Turing machine (concept)", "dev": "Alan Turing (1912–1954)" }
                        ]
                        },
                        {
                        "id": "hist_birth",
                        "l": "Birth of AI (1940s–1960s)",
                        "ch": [
                            { "id": "hist_birth_turing_test", "l": "Turing Test & Computing Machinery and Intelligence (1950)", "product": "Turing Test (imitation game)", "dev": "Alan Turing" },
                            { "id": "hist_birth_mcculloch_pitts", "l": "McCulloch‑Pitts neuron (1943)", "product": "First mathematical model of a neuron", "dev": "Warren McCulloch, Walter Pitts" },
                            { "id": "hist_birth_dartmouth", "l": "Dartmouth Workshop (1956) – coining 'Artificial Intelligence'", "product": "Dartmouth Summer Research Project", "dev": "John McCarthy, Marvin Minsky, Claude Shannon, Nathaniel Rochester" },
                            { "id": "hist_birth_logic_theorist", "l": "Logic Theorist & GPS – Newell & Simon", "product": "Logic Theorist (1956), General Problem Solver (1957)", "dev": "Allen Newell, Herbert A. Simon" },
                            { "id": "hist_birth_perceptron", "l": "Perceptron – Rosenblatt (1958)", "product": "Mark I Perceptron (hardware)", "dev": "Frank Rosenblatt", "hw": "Custom analog computer" },
                            { "id": "hist_birth_lisp", "l": "LISP programming language – McCarthy (1958)", "tool": "LISP (Common Lisp, Scheme)", "dev": "John McCarthy" }
                        ]
                        },
                        {
                        "id": "hist_winters",
                        "l": "AI Winters & Expert Systems (1970s–1980s)",
                        "ch": [
                            { "id": "hist_winter_expert", "l": "Expert systems (MYCIN, DENDRAL, XCON)", "product": "MYCIN (medical diagnosis, 1976), DENDRAL (molecular structure, 1965), XCON (DEC VAX config, 1980)", "dev": "Edward Feigenbaum, Bruce Buchanan, Joshua Lederberg" },
                            { "id": "hist_winter_knowledge_eng", "l": "Knowledge engineering", "dev": "Edward Feigenbaum" },
                            { "id": "hist_winter_prolog", "l": "Prolog & logic programming", "tool": "Prolog (1972)", "dev": "Alain Colmerauer, Robert Kowalski" },
                            { "id": "hist_winter_lighthill", "l": "Lighthill Report critique (1973)", "product": "Lighthill Report", "dev": "Sir James Lighthill (UK)" },
                            { "id": "hist_winter_japan", "l": "Japan Fifth Generation Computer Project (1982–1992)", "product": "FGCS (Prolog-based parallel computing)", "dev": "ICOT (Japan)" },
                            { "id": "hist_winter_first_ai_winter", "l": "First AI winter (1974–1980)", "dev": "N/A" }
                        ]
                        },
                        {
                        "id": "hist_connectionism",
                        "l": "Connectionism Revival (1980s–1990s)",
                        "ch": [
                            { "id": "hist_conn_backprop", "l": "Backpropagation rediscovery – Rumelhart, Hinton, Williams (1986)", "product": "Parallel Distributed Processing (book)", "dev": "David Rumelhart, Geoffrey Hinton, Ronald Williams" },
                            { "id": "hist_conn_hopfield", "l": "Hopfield networks (1982) & Boltzmann machines (1985)", "dev": "John Hopfield, Geoffrey Hinton, Terry Sejnowski" },
                            { "id": "hist_conn_second_winter", "l": "Second AI winter – early 1990s", "dev": "N/A" },
                            { "id": "hist_conn_svm", "l": "Support vector machines – Vapnik (1995)", "product": "SVM (Cortes & Vapnik)", "dev": "Vladimir Vapnik, Corinna Cortes" },
                            { "id": "hist_conn_deep_blue", "l": "Deep Blue defeats Kasparov (1997)", "product": "IBM Deep Blue", "dev": "IBM (Feng‑hsiung Hsu, Murray Campbell)", "hw": "IBM RS/6000 SP supercomputer" }
                        ]
                        },
                        {
                        "id": "hist_statistical",
                        "l": "Statistical AI & Modern ML (2000s)",
                        "ch": [
                            { "id": "hist_stat_kernel", "l": "Kernel methods & ensemble models (Random Forests, Boosting)", "dev": "Leo Breiman (Random Forests), Yoav Freund & Robert Schapire (AdaBoost)" },
                            { "id": "hist_stat_imagenet", "l": "ImageNet dataset creation (2009)", "product": "ImageNet", "dev": "Fei‑Fei Li, Jia Deng, Kai Zhang (Stanford)" },
                            { "id": "hist_stat_deep_resurgence", "l": "Deep learning resurgence – Hinton, LeCun, Bengio", "dev": "Geoffrey Hinton, Yann LeCun, Yoshua Bengio (2018 Turing Award)" },
                            { "id": "hist_stat_alexnet", "l": "AlexNet breakthrough (2012)", "product": "AlexNet (ImageNet winner)", "dev": "Alex Krizhevsky, Ilya Sutskever, Geoffrey Hinton", "hw": "NVIDIA GTX 580 (2x)" }
                        ]
                        },
                        {
                        "id": "hist_deep_era",
                        "l": "Deep Learning Era (2012–2017)",
                        "ch": [
                            { "id": "hist_deep_word2vec", "l": "Word2Vec – Mikolov et al. (2013)", "product": "Word2Vec (Google)", "dev": "Tomáš Mikolov, Google", "tool": "Gensim, TensorFlow" },
                            { "id": "hist_deep_gans", "l": "GANs – Goodfellow (2014)", "product": "Generative Adversarial Networks", "dev": "Ian Goodfellow (University of Montreal)" },
                            { "id": "hist_deep_alphago", "l": "AlphaGo defeats Lee Sedol (2016)", "product": "AlphaGo (DeepMind)", "dev": "DeepMind (Demis Hassabis, David Silver)", "hw": "TPU cluster" },
                            { "id": "hist_deep_resnet", "l": "ResNet & very deep networks (2015)", "product": "ResNet (Microsoft Research)", "dev": "Kaiming He, Xiangyu Zhang, Shaoqing Ren, Jian Sun" },
                            { "id": "hist_deep_attention", "l": "Attention mechanism – Bahdanau (2015)", "product": "Neural Machine Translation by Jointly Learning to Align and Translate", "dev": "Dzmitry Bahdanau, Kyunghyun Cho, Yoshua Bengio" }
                        ]
                        },
                        {
                        "id": "hist_transformer",
                        "l": "Transformer & LLM Era (2017–present)",
                        "ch": [
                            { "id": "hist_trans_attention", "l": "Attention Is All You Need – Vaswani et al. (2017)", "product": "Transformer architecture", "dev": "Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, Łukasz Kaiser, Illia Polosukhin (Google Brain)" },
                            { "id": "hist_trans_bert", "l": "BERT (2018), GPT‑2 (2019)", "product": "BERT (Google), GPT‑2 (OpenAI)", "dev": "Google AI (Jacob Devlin), OpenAI (Alec Radford)" },
                            { "id": "hist_trans_gpt3", "l": "GPT‑3 (2020) – few‑shot learning", "product": "GPT‑3 (OpenAI)", "dev": "OpenAI (Tom Brown et al.)", "hw": "Microsoft Azure cluster (10,000+ V100 GPUs)" },
                            { "id": "hist_trans_alphafold2", "l": "AlphaFold 2 (2021) – protein folding", "product": "AlphaFold 2 (DeepMind)", "dev": "DeepMind (John Jumper, Demis Hassabis)", "hw": "TPU cluster" },
                            { "id": "hist_trans_dalle", "l": "DALL‑E, Stable Diffusion (2021–2022)", "product": "DALL‑E (OpenAI), Stable Diffusion (Stability AI)", "dev": "OpenAI, Stability AI" },
                            { "id": "hist_trans_chatgpt", "l": "ChatGPT & RLHF breakthrough (2022)", "product": "ChatGPT (OpenAI)", "dev": "OpenAI", "hw": "Azure GPU cluster" },
                            { "id": "hist_trans_gpt4", "l": "GPT‑4, Gemini, Claude, LLaMA (2023–2024)", "product": "GPT‑4 (OpenAI), Gemini (Google), Claude (Anthropic), LLaMA (Meta)", "dev": "OpenAI, Google DeepMind, Anthropic, Meta AI" },
                            { "id": "hist_trans_agentic", "l": "Agentic AI & multimodal models (2024–2025)", "product": "GPT‑4o, Gemini 2.0, Claude 3.5, o1/o3, Sora", "dev": "OpenAI, Google, Anthropic" }
                        ]
                        },
                        {
                        "id": "hist_philosophical",
                        "l": "Philosophical Debates & Critiques",
                        "ch": [
                            { "id": "hist_phil_chinese_room", "l": "Chinese Room argument – Searle (1980)", "dev": "John Searle (UC Berkeley)" },
                            { "id": "hist_phil_moravec", "l": "Moravec's paradox (1988)", "dev": "Hans Moravec" },
                            { "id": "hist_phil_dreyfus", "l": "Dreyfus' critique – What Computers Still Can't Do (1972/1992)", "dev": "Hubert Dreyfus (MIT/UC Berkeley)" },
                            { "id": "hist_phil_alignment", "l": "Alignment problem & existential risk debates", "dev": "Nick Bostrom (Superintelligence, 2014), Eliezer Yudkowsky (MIRI)" }
                        ]
                        }
                    ]
                    },
                // ─────────────────────────────────────────────────────────
                // 2. MATHEMATICAL FOUNDATIONS
                // ─────────────────────────────────────────────────────────
                {
                    "id": "math",
                    "c": "math",
                    "l": "Mathematical Foundations",
                    "ch": [
                        {
                            "id": "math_la",
                            "l": "Linear Algebra",
                            "ch": [
                                {
                                    "id": "math_la_vectors",
                                    "l": "Vectors and vector spaces",
                                    "ch": [
                                        { "id": "math_la_vectors_basic", "l": "Vector operations (dot, cross, outer product)", "hw": "CPU", "tool": "NumPy, PyTorch, TensorFlow" },
                                        { "id": "math_la_vectors_basis", "l": "Basis, dimension, span", "tool": "NumPy (linalg.matrix_rank)" },
                                        { "id": "math_la_vectors_lincomb", "l": "Linear combinations and independence" }
                                    ]
                                },
                                {
                                    "id": "math_la_matrices",
                                    "l": "Matrices and matrix algebra",
                                    "ch": [
                                        { "id": "math_la_mat_ops", "l": "Matrix addition, multiplication, transpose", "hw": "CPU/GPU", "tool": "NumPy, PyTorch, TensorFlow" },
                                        { "id": "math_la_mat_inv", "l": "Inverse, pseudoinverse (Moore–Penrose)", "tool": "NumPy (linalg.pinv), SciPy" },
                                        { "id": "math_la_mat_rank", "l": "Rank, nullspace, column/row space", "tool": "NumPy (linalg.matrix_rank), SciPy" },
                                        { "id": "math_la_mat_det", "l": "Determinant and trace" },
                                        { "id": "math_la_mat_special", "l": "Special matrices (symmetric, orthogonal, idempotent, Toeplitz, Hankel)", "tool": "SciPy (toeplitz, hankel)" }
                                    ]
                                },
                                {
                                    "id": "math_la_eigen",
                                    "l": "Eigenvalues and eigenvectors",
                                    "ch": [
                                        { "id": "math_la_eigen_char", "l": "Characteristic polynomial, spectral theorem" },
                                        { "id": "math_la_eigen_diag", "l": "Diagonalisation and Jordan normal form", "tool": "NumPy (linalg.eig), SciPy (linalg.schur)" },
                                        { "id": "math_la_eigen_app", "l": "Applications in AI (PCA, spectral clustering, graph Laplacians)", "tool": "scikit-learn (PCA, SpectralClustering)" }
                                    ]
                                },
                                {
                                    "id": "math_la_svd",
                                    "l": "Singular Value Decomposition (SVD)",
                                    "ch": [
                                        { "id": "math_la_svd_full", "l": "Full, reduced, and compact SVD", "tool": "NumPy (linalg.svd), SciPy (linalg.svd)" },
                                        { "id": "math_la_svd_app", "l": "Low‑rank approximation, matrix completion, latent semantic analysis", "tool": "scikit-learn (TruncatedSVD), Facebook (FAISS)" }
                                    ]
                                },
                                {
                                    "id": "math_la_norms",
                                    "l": "Norms and inner products",
                                    "ch": [
                                        { "id": "math_la_norms_Lp", "l": "Lp norms (L1, L2, L∞)", "tool": "NumPy (linalg.norm)" },
                                        { "id": "math_la_norms_frob", "l": "Frobenius norm, nuclear norm", "tool": "NumPy (linalg.norm, ord='nuc')" },
                                        { "id": "math_la_dist", "l": "Distance metrics (Euclidean, Mahalanobis, cosine)", "tool": "SciPy (spatial.distance), scikit-learn (pairwise_distances)" }
                                    ]
                                },
                                {
                                    "id": "math_la_tensors",
                                    "l": "Tensors and multilinear algebra",
                                    "ch": [
                                        { "id": "math_la_tensors_def", "l": "Tensor definition, order, modes", "tool": "NumPy (ndarray), PyTorch, TensorFlow" },
                                        { "id": "math_la_tensors_ops", "l": "Tensor contractions, Kronecker product, Khatri–Rao product", "tool": "NumPy (einsum), Tensorly", "dev": "Tensorly (Jean Kossaifi)" },
                                        { "id": "math_la_tensors_decomp", "l": "CP decomposition, Tucker decomposition, Tensor train", "tool": "Tensorly, tntorch" },
                                        { "id": "math_la_tensors_nn", "l": "Tensor applications in deep learning (weight compression, attention)", "hw": "GPU", "tool": "PyTorch, TensorFlow" }
                                    ]
                                }
                            ]
                        },
                        {
                            "id": "math_calc",
                            "l": "Calculus and Analysis",
                            "ch": [
                                {
                                    "id": "math_calc_diff",
                                    "l": "Differential calculus",
                                    "ch": [
                                        { "id": "math_calc_diff_deriv", "l": "Derivatives, partial derivatives, directional derivatives", "hw": "CPU/GPU", "tool": "SymPy, JAX, PyTorch (autograd)" },
                                        { "id": "math_calc_diff_grad", "l": "Gradient, Jacobian, Hessian", "tool": "JAX (jacfwd), PyTorch (torch.autograd.functional)" },
                                        { "id": "math_calc_diff_chain", "l": "Chain rule and automatic differentiation (forward/reverse mode)", "tool": "PyTorch (autograd), TensorFlow (GradientTape), JAX", "dev": "Baydin et al. (autograd)" },
                                        { "id": "math_calc_diff_taylor", "l": "Taylor series and approximation", "tool": "SymPy (series)" }
                                    ]
                                },
                                {
                                    "id": "math_calc_int",
                                    "l": "Integral calculus",
                                    "ch": [
                                        { "id": "math_calc_int_def", "l": "Definite and indefinite integrals", "tool": "SymPy (integrate), SciPy (integrate.quad)" },
                                        { "id": "math_calc_int_mult", "l": "Multiple integrals (double, triple)", "tool": "SciPy (nquad)" },
                                        { "id": "math_calc_int_line", "l": "Line and surface integrals" },
                                        { "id": "math_calc_int_app", "l": "Applications (expectation, area, volume)" }
                                    ]
                                },
                                {
                                    "id": "math_calc_vec",
                                    "l": "Vector calculus",
                                    "ch": [
                                        { "id": "math_calc_vec_div", "l": "Divergence, gradient, curl" },
                                        { "id": "math_calc_vec_laplacian", "l": "Laplacian and Laplace operator" },
                                        { "id": "math_calc_vec_theorems", "l": "Green's, Stokes', divergence theorem" }
                                    ]
                                },
                                {
                                    "id": "math_calc_ode",
                                    "l": "Ordinary differential equations",
                                    "ch": [
                                        { "id": "math_calc_ode_first", "l": "First-order ODEs (separable, linear, exact)", "tool": "SymPy (dsolve), SciPy (solve_ivp)" },
                                        { "id": "math_calc_ode_linear", "l": "Linear ODEs with constant coefficients" },
                                        { "id": "math_calc_ode_sys", "l": "Systems of ODEs, phase portraits", "tool": "SciPy (solve_ivp), matplotlib (phase portraits)" },
                                        { "id": "math_calc_ode_numerical", "l": "Numerical solvers (Euler, Runge–Kutta)", "tool": "SciPy (odeint, solve_ivp)" }
                                    ]
                                },
                                {
                                    "id": "math_calc_pde",
                                    "l": "Partial differential equations",
                                    "ch": [
                                        { "id": "math_calc_pde_heat", "l": "Heat equation, diffusion equation" },
                                        { "id": "math_calc_pde_wave", "l": "Wave equation" },
                                        { "id": "math_calc_pde_laplace", "l": "Laplace and Poisson equations" },
                                        { "id": "math_calc_pde_numerical", "l": "Finite difference, finite element methods", "tool": "FEniCS, FiPy" }
                                    ]
                                },
                                {
                                    "id": "math_calc_var",
                                    "l": "Calculus of variations",
                                    "ch": [
                                        { "id": "math_calc_var_euler", "l": "Euler–Lagrange equation" },
                                        { "id": "math_calc_var_app", "l": "Applications in variational inference, neural ODEs, optimal control", "tool": "Pyro (variational inference), torchdiffeq (neural ODEs)" }
                                    ]
                                }
                            ]
                        },
                        {
                            "id": "math_optim",
                            "l": "Optimisation Theory",
                            "ch": [
                                {
                                    "id": "math_optim_convex",
                                    "l": "Convex optimisation",
                                    "ch": [
                                        { "id": "math_optim_convex_def", "l": "Convex sets, convex functions" },
                                        { "id": "math_optim_convex_cond", "l": "KKT conditions, duality (Lagrange, Fenchel)", "tool": "CVXPY" },
                                        { "id": "math_optim_convex_algo", "l": "Gradient descent, subgradient, proximal methods", "tool": "scikit-learn (SGD), PyTorch (optim)" }
                                    ]
                                },
                                {
                                    "id": "math_optim_nonconvex",
                                    "l": "Non‑convex optimisation",
                                    "ch": [
                                        { "id": "math_optim_nonconvex_algo", "l": "Stochastic gradient descent, Adam, Newton methods", "tool": "PyTorch (optim.Adam), TensorFlow (Adam)" },
                                        { "id": "math_optim_nonconvex_landscape", "l": "Saddle points, local minima, loss landscapes", "tool": "PyTorch (loss landscape visualization)" }
                                    ]
                                },
                                {
                                    "id": "math_optim_constrained",
                                    "l": "Constrained optimisation",
                                    "ch": [
                                        { "id": "math_optim_constrained_lagrange", "l": "Lagrange multipliers", "tool": "SymPy (solve), SciPy (optimize.minimize)" },
                                        { "id": "math_optim_constrained_barrier", "l": "Barrier and penalty methods", "tool": "CVXOPT" }
                                    ]
                                },
                                {
                                    "id": "math_optim_linear",
                                    "l": "Linear programming",
                                    "ch": [
                                        { "id": "math_optim_linear_simplex", "l": "Simplex algorithm", "tool": "SciPy (linprog), PuLP", "dev": "George Dantzig" },
                                        { "id": "math_optim_linear_interior", "l": "Interior point methods", "tool": "CVXOPT, Gurobi" }
                                    ]
                                },
                                { "id": "math_optim_quadratic", "l": "Quadratic programming", "tool": "CVXOPT, qpsolvers" },
                                {
                                    "id": "math_optim_stochastic",
                                    "l": "Stochastic optimisation",
                                    "ch": [
                                        { "id": "math_optim_stochastic_sgd", "l": "SGD, mini‑batch, variance reduction (SVRG, SAGA)", "tool": "PyTorch (optim.SGD), scikit-learn (SGDClassifier)" },
                                        { "id": "math_optim_stochastic_adam", "l": "Adaptive methods (Adam, RMSprop)", "tool": "PyTorch (optim.Adam, optim.RMSprop)" },
                                        { "id": "math_optim_stochastic_lr", "l": "Learning rate schedules (warmup, cosine decay)", "tool": "PyTorch (lr_scheduler), TensorFlow (keras.optimizers.schedules)" }
                                    ]
                                },
                                {
                                    "id": "math_optim_global",
                                    "l": "Global optimisation",
                                    "ch": [
                                        { "id": "math_optim_global_meta", "l": "Metahuristics (simulated annealing, genetic algorithms)", "tool": "SciPy (optimize.basinhopping), DEAP" },
                                        { "id": "math_optim_global_bayes", "l": "Bayesian optimisation (GP‑UCB, EI)", "tool": "Optuna, Hyperopt, BoTorch" }
                                    ]
                                }
                            ]
                        },
                        {
                            "id": "math_prob",
                            "l": "Probability Theory",
                            "ch": [
                                {
                                    "id": "math_prob_fund",
                                    "l": "Foundations",
                                    "ch": [
                                        { "id": "math_prob_fund_space", "l": "Sample space, events, σ‑algebra" },
                                        { "id": "math_prob_fund_measure", "l": "Probability measure, axioms of Kolmogorov", "dev": "Andrey Kolmogorov" },
                                        { "id": "math_prob_fund_cond", "l": "Conditional probability, Bayes' theorem", "dev": "Thomas Bayes" },
                                        { "id": "math_prob_fund_indep", "l": "Independence, conditional independence" }
                                    ]
                                },
                                {
                                    "id": "math_prob_dist",
                                    "l": "Random variables and distributions",
                                    "ch": [
                                        { "id": "math_prob_dist_discrete", "l": "Discrete: Bernoulli, Binomial, Geometric, Poisson", "tool": "SciPy (stats), NumPy (random)" },
                                        { "id": "math_prob_dist_continuous", "l": "Continuous: Uniform, Gaussian (Normal), Exponential, Gamma, Beta, Dirichlet", "tool": "SciPy (stats.norm, stats.gamma, stats.beta), PyTorch (distributions)" },
                                        { "id": "math_prob_dist_multivar", "l": "Multivariate: Multinomial, Multivariate Gaussian, Wishart", "tool": "SciPy (stats.multivariate_normal), PyTorch (MultivariateNormal)" },
                                        { "id": "math_prob_dist_mixture", "l": "Mixture distributions (GMM)", "tool": "scikit-learn (GaussianMixture)" },
                                        { "id": "math_prob_dist_copula", "l": "Copulas for dependence modelling", "tool": "copulas (SDV)" }
                                    ]
                                },
                                {
                                    "id": "math_prob_expect",
                                    "l": "Expectation and moments",
                                    "ch": [
                                        { "id": "math_prob_expect_mean", "l": "Expected value, variance, covariance", "tool": "NumPy (mean, var, cov)" },
                                        { "id": "math_prob_expect_skew", "l": "Skewness, kurtosis", "tool": "SciPy (stats.skew, stats.kurtosis)" },
                                        { "id": "math_prob_expect_mgf", "l": "Moment generating function, characteristic function" }
                                    ]
                                },
                                {
                                    "id": "math_prob_limit",
                                    "l": "Limit theorems",
                                    "ch": [
                                        { "id": "math_prob_limit_lln", "l": "Law of large numbers (weak, strong)" },
                                        { "id": "math_prob_limit_clt", "l": "Central limit theorem (Lindeberg–Lévy, Lyapunov)" },
                                        { "id": "math_prob_limit_clt_approx", "l": "Normal approximation and Berry–Esseen bounds" }
                                    ]
                                },
                                {
                                    "id": "math_prob_process",
                                    "l": "Stochastic processes",
                                    "ch": [
                                        { "id": "math_prob_process_markov", "l": "Markov chains (discrete time, continuous time)", "tool": "SciPy (sparse), PyMC (Markov chains)" },
                                        { "id": "math_prob_process_brownian", "l": "Brownian motion / Wiener process", "tool": "NumPy (random.walk)" },
                                        { "id": "math_prob_process_poisson", "l": "Poisson process", "tool": "SciPy (stats.poisson)" },
                                        { "id": "math_prob_process_gp", "l": "Gaussian processes (kernels, sampling, regression)", "tool": "GPyTorch, GPflow, scikit-learn (GaussianProcessRegressor)" },
                                        { "id": "math_prob_process_martingale", "l": "Martingales and stopping times" }
                                    ]
                                },
                                {
                                    "id": "math_prob_info",
                                    "l": "Information theory (as probabilistic)",
                                    "ch": [
                                        { "id": "math_prob_info_entropy", "l": "Shannon entropy, joint entropy, conditional entropy", "tool": "SciPy (stats.entropy)" },
                                        { "id": "math_prob_info_kl", "l": "KL divergence, cross‑entropy", "tool": "SciPy (stats.entropy), PyTorch (nn.KLDivLoss)" },
                                        { "id": "math_prob_info_mi", "l": "Mutual information, variation of information", "tool": "scikit-learn (mutual_info_score)" },
                                        { "id": "math_prob_info_maxent", "l": "Maximum entropy principle", "tool": "SciPy (optimize)" },
                                        { "id": "math_prob_info_renyi", "l": "Rényi entropy and divergences" }
                                    ]
                                }
                            ]
                        },
                        {
                            "id": "math_stats",
                            "l": "Statistical Inference",
                            "ch": [
                                {
                                    "id": "math_stats_est",
                                    "l": "Estimation theory",
                                    "ch": [
                                        { "id": "math_stats_est_point", "l": "Point estimation (MLE, MAP, method of moments)", "tool": "SciPy (optimize.minimize), PyMC, statsmodels" },
                                        { "id": "math_stats_est_bayes", "l": "Bayesian estimation (prior, posterior, conjugate priors)", "tool": "PyMC, Stan, TensorFlow Probability" },
                                        { "id": "math_stats_est_interval", "l": "Confidence intervals, credible intervals", "tool": "SciPy (stats.t.interval), statsmodels (conf_int)" }
                                    ]
                                },
                                {
                                    "id": "math_stats_hyp",
                                    "l": "Hypothesis testing",
                                    "ch": [
                                        { "id": "math_stats_hyp_null", "l": "Null and alternative, p‑values, significance level", "tool": "SciPy (stats.ttest_ind, stats.chisquare)" },
                                        { "id": "math_stats_hyp_common", "l": "t‑test, chi‑square test, ANOVA", "tool": "SciPy (stats.f_oneway), statsmodels" },
                                        { "id": "math_stats_hyp_bayes", "l": "Bayes factor", "tool": "PyMC (bayes factor)" },
                                        { "id": "math_stats_hyp_multi", "l": "Multiple testing correction (Bonferroni, FDR)", "tool": "statsmodels (multipletests)" }
                                    ]
                                },
                                {
                                    "id": "math_stats_reg",
                                    "l": "Regression analysis",
                                    "ch": [
                                        { "id": "math_stats_reg_linear", "l": "Linear regression, ordinary least squares", "tool": "statsmodels (OLS), scikit-learn (LinearRegression)" },
                                        { "id": "math_stats_reg_glm", "l": "Generalised linear models (logistic, Poisson)", "tool": "statsmodels (GLM), scikit-learn (LogisticRegression)" },
                                        { "id": "math_stats_reg_nonparam", "l": "Non‑parametric regression (kernel, spline)", "tool": "statsmodels (KernelReg), scikit-learn (SVR)" }
                                    ]
                                },
                                {
                                    "id": "math_stats_bayes",
                                    "l": "Bayesian inference",
                                    "ch": [
                                        { "id": "math_stats_bayes_mcmc", "l": "Markov Chain Monte Carlo (Metropolis‑Hastings, Gibbs)", "tool": "PyMC, Stan, emcee" },
                                        { "id": "math_stats_bayes_vi", "l": "Variational inference (ELBO, mean‑field)", "tool": "Pyro, TensorFlow Probability (VI)" },
                                        { "id": "math_stats_bayes_laplace", "l": "Laplace approximation", "tool": "SciPy (optimize.minimize)" }
                                    ]
                                },
                                {
                                    "id": "math_stats_np",
                                    "l": "Non‑parametric statistics",
                                    "ch": [
                                        { "id": "math_stats_np_kde", "l": "Kernel density estimation", "tool": "scikit-learn (KernelDensity), SciPy (gaussian_kde)" },
                                        { "id": "math_stats_np_bootstrap", "l": "Bootstrap and jackknife", "tool": "scikit-learn (Bootstrap), statsmodels (bootstrap)" }
                                    ]
                                }
                            ]
                        },
                        {
                            "id": "math_graph",
                            "l": "Graph Theory",
                            "ch": [
                                {
                                    "id": "math_graph_basic",
                                    "l": "Basic concepts",
                                    "ch": [
                                        { "id": "math_graph_basic_def", "l": "Vertices, edges, directed/undirected, weighted/unweighted", "tool": "NetworkX, igraph" },
                                        { "id": "math_graph_basic_path", "l": "Paths, cycles, connectivity, components", "tool": "NetworkX (connected_components, has_path)" },
                                        { "id": "math_graph_basic_trees", "l": "Trees, forests, spanning trees", "tool": "NetworkX (minimum_spanning_tree)" }
                                    ]
                                },
                                {
                                    "id": "math_graph_algo",
                                    "l": "Graph algorithms",
                                    "ch": [
                                        { "id": "math_graph_algo_traversal", "l": "BFS, DFS", "tool": "NetworkX (bfs_tree, dfs_tree)" },
                                        { "id": "math_graph_algo_shortest", "l": "Dijkstra, Bellman‑Ford, Floyd‑Warshall", "tool": "NetworkX (dijkstra_path, floyd_warshall)" },
                                        { "id": "math_graph_algo_mst", "l": "Minimum spanning tree (Prim, Kruskal)", "tool": "NetworkX (minimum_spanning_tree)" },
                                        { "id": "math_graph_algo_maxflow", "l": "Max flow / min cut (Ford‑Fulkerson, Edmonds‑Karp)", "tool": "NetworkX (maximum_flow, minimum_cut)" }
                                    ]
                                },
                                {
                                    "id": "math_graph_spectral",
                                    "l": "Spectral graph theory",
                                    "ch": [
                                        { "id": "math_graph_spectral_laplacian", "l": "Graph Laplacian matrix", "tool": "NetworkX (laplacian_matrix), SciPy (sparse)" },
                                        { "id": "math_graph_spectral_eigen", "l": "Eigenvalues of Laplacian, connectivity, bipartiteness" },
                                        { "id": "math_graph_spectral_clust", "l": "Spectral clustering", "tool": "scikit-learn (SpectralClustering)" }
                                    ]
                                },
                                {
                                    "id": "math_graph_rand",
                                    "l": "Random graphs",
                                    "ch": [
                                        { "id": "math_graph_rand_erdos", "l": "Erdős–Rényi model", "tool": "NetworkX (erdos_renyi_graph)", "dev": "Paul Erdős, Alfréd Rényi" },
                                        { "id": "math_graph_rand_smallworld", "l": "Watts–Strogatz small‑world", "tool": "NetworkX (watts_strogatz_graph)", "dev": "Duncan Watts, Steven Strogatz" },
                                        { "id": "math_graph_rand_prefattach", "l": "Barabási–Albert preferential attachment", "tool": "NetworkX (barabasi_albert_graph)", "dev": "Albert‑László Barabási" }
                                    ]
                                },
                                {
                                    "id": "math_graph_gnn",
                                    "l": "Graph neural networks (mathematical basis)",
                                    "ch": [
                                        { "id": "math_graph_gnn_message", "l": "Message passing framework", "tool": "PyTorch Geometric, DGL" },
                                        { "id": "math_graph_gnn_weisfeiler", "l": "Weisfeiler–Lehman isomorphism test", "tool": "PyTorch Geometric (WL test)" }
                                    ]
                                }
                            ]
                        },
                        {
                            "id": "math_geom",
                            "l": "Geometry and Topology",
                            "ch": [
                                {
                                    "id": "math_geom_euclid",
                                    "l": "Euclidean geometry",
                                    "ch": [
                                        { "id": "math_geom_euclid_trans", "l": "Transformations (rotation, translation, scaling)", "tool": "NumPy (matrix multiplication), PyTorch (affine_grid)" }
                                    ]
                                },
                                {
                                    "id": "math_geom_riemann",
                                    "l": "Riemannian geometry",
                                    "ch": [
                                        { "id": "math_geom_riemann_metric", "l": "Riemannian metric, geodesics", "tool": "Geomstats" },
                                        { "id": "math_geom_riemann_curvature", "l": "Curvature tensors" },
                                        { "id": "math_geom_riemann_app", "l": "Applications: manifold learning, natural gradient", "tool": "Geomstats, PyManOpt (natural gradient)" }
                                    ]
                                },
                                {
                                    "id": "math_geom_proj",
                                    "l": "Projective geometry",
                                    "ch": [
                                        { "id": "math_geom_proj_homog", "l": "Homogeneous coordinates, projective transformations", "tool": "OpenCV (perspectiveTransform)" }
                                    ]
                                },
                                {
                                    "id": "math_geom_top",
                                    "l": "Topology",
                                    "ch": [
                                        { "id": "math_geom_top_basic", "l": "Open/closed sets, continuity, compactness" },
                                        { "id": "math_geom_top_homotopy", "l": "Homotopy, fundamental group" },
                                        { "id": "math_geom_top_homology", "l": "Homology, persistent homology (topological data analysis)", "tool": "GUDHI, Ripser" }
                                    ]
                                },
                                {
                                    "id": "math_geom_diff",
                                    "l": "Differential geometry",
                                    "ch": [
                                        { "id": "math_geom_diff_manifold", "l": "Manifolds, tangent spaces", "tool": "Geomstats" },
                                        { "id": "math_geom_diff_forms", "l": "Differential forms, integration on manifolds" }
                                    ]
                                }
                            ]
                        },
                        {
                            "id": "math_dynamics",
                            "l": "Dynamical Systems and Chaos",
                            "ch": [
                                {
                                    "id": "math_dynamics_cont",
                                    "l": "Continuous dynamical systems",
                                    "ch": [
                                        { "id": "math_dynamics_cont_flow", "l": "Phase space, flows, equilibria", "tool": "SciPy (solve_ivp), matplotlib (phase portraits)" }
                                    ]
                                },
                                {
                                    "id": "math_dynamics_discrete",
                                    "l": "Discrete maps",
                                    "ch": [
                                        { "id": "math_dynamics_discrete_logistic", "l": "Logistic map, bifurcations", "tool": "NumPy, matplotlib" }
                                    ]
                                },
                                {
                                    "id": "math_dynamics_chaos",
                                    "l": "Chaos theory",
                                    "ch": [
                                        { "id": "math_dynamics_chaos_sensitivity", "l": "Sensitive dependence, Lyapunov exponents", "tool": "nolds (Lyapunov exponent)" },
                                        { "id": "math_dynamics_chaos_attractor", "l": "Strange attractors (Lorenz, Rössler)", "tool": "SciPy (Lorenz equations), matplotlib" }
                                    ]
                                },
                                {
                                    "id": "math_dynamics_stability",
                                    "l": "Stability theory",
                                    "ch": [
                                        { "id": "math_dynamics_stability_lyap", "l": "Lyapunov stability, linearisation", "tool": "SciPy (linalg.eig)" }
                                    ]
                                }
                            ]
                        },
                        {
                            "id": "math_measure",
                            "l": "Measure Theory and Integration",
                            "ch": [
                                { "id": "math_measure_basic", "l": "Measures and σ‑algebras" },
                                { "id": "math_measure_lebesgue", "l": "Lebesgue integration, convergence theorems" },
                                { "id": "math_measure_product", "l": "Product measures, Fubini–Tonelli" },
                                { "id": "math_measure_prob", "l": "Probability as a measure space" }
                            ]
                        },
                        {
                            "id": "math_num",
                            "l": "Numerical Methods",
                            "ch": [
                                {
                                    "id": "math_num_lin",
                                    "l": "Numerical linear algebra",
                                    "ch": [
                                        { "id": "math_num_lin_lu", "l": "LU, QR, Cholesky decompositions", "tool": "NumPy (linalg.lu, linalg.qr, linalg.cholesky), SciPy" },
                                        { "id": "math_num_lin_iter", "l": "Iterative methods (Conjugate gradient, GMRES)", "tool": "SciPy (sparse.linalg.cg, gmres)" },
                                        { "id": "math_num_lin_eigen", "l": "Power iteration, Lanczos, Arnoldi", "tool": "SciPy (sparse.linalg.eigs)" }
                                    ]
                                },
                                {
                                    "id": "math_num_opt",
                                    "l": "Numerical optimisation",
                                    "ch": [
                                        { "id": "math_num_opt_line", "l": "Line search, trust region", "tool": "SciPy (optimize.minimize)" },
                                        { "id": "math_num_opt_quasi", "l": "Quasi‑Newton (BFGS, L‑BFGS)", "tool": "SciPy (optimize.minimize, method='BFGS'), PyTorch (LBFGS)" }
                                    ]
                                },
                                {
                                    "id": "math_num_quad",
                                    "l": "Numerical quadrature",
                                    "ch": [
                                        { "id": "math_num_quad_newton", "l": "Newton–Cotes, Gaussian quadrature", "tool": "SciPy (integrate.quad, integrate.fixed_quad)" },
                                        { "id": "math_num_quad_monte", "l": "Monte Carlo integration", "tool": "NumPy (random.uniform), PyMC" }
                                    ]
                                }
                            ]
                        },
                        {
                            "id": "math_infogeom",
                            "l": "Information Geometry",
                            "ch": [
                                { "id": "math_infogeom_statman", "l": "Statistical manifolds" },
                                { "id": "math_infogeom_fisher", "l": "Fisher information metric", "tool": "PyTorch (hessian), JAX" },
                                { "id": "math_infogeom_alpha", "l": "α‑connections, divergence functions" },
                                { "id": "math_infogeom_app", "l": "Applications: natural gradient descent, exponential families", "tool": "Geomstats, PyManOpt" }
                            ]
                        },
                        {
                            "id": "math_alg",
                            "l": "Abstract Algebra (for completeness)",
                            "ch": [
                                {
                                    "id": "math_alg_group",
                                    "l": "Group theory",
                                    "ch": [
                                        { "id": "math_alg_group_sym", "l": "Symmetric groups, group actions" }
                                    ]
                                },
                                { "id": "math_alg_ring", "l": "Ring and field theory" },
                                { "id": "math_alg_galois", "l": "Galois theory (connections to coding theory)" }
                            ]
                        },
                        {
                            "id": "math_comp",
                            "l": "Computational Complexity (within Math)",
                            "ch": [
                                { "id": "math_comp_pnp", "l": "P, NP, NP‑complete, NP‑hard" },
                                { "id": "math_comp_approx", "l": "Approximation algorithms, hardness of approximation" },
                                { "id": "math_comp_learning", "l": "PAC learning, VC dimension, Rademacher complexity", "tool": "scikit-learn (VC dimension estimation)" }
                            ]
                        }
                    ]
                },
                // ─────────────────────────────────────────────────────────
                // 3. CORE AI: SYMBOLIC, KNOWLEDGE & REASONING
                // ─────────────────────────────────────────────────────────
                {
                    "id": "core",
                    "c": "core",
                    "l": "Symbolic AI & Knowledge Representation",
                    "ch": [
                        {
                            "id": "kr_logic",
                            "l": "Formal Logic Systems",
                            "ch": [
                                {
                                    "id": "kr_logic_prop",
                                    "l": "Propositional logic",
                                    "ch": [
                                        { "id": "kr_logic_prop_syntax", "l": "Syntax: atoms, connectives, well‑formed formulas", "hw": "CPU", "tool": "PyLog, sympy" },
                                        { "id": "kr_logic_prop_sem", "l": "Semantics: truth tables, interpretations, models" },
                                        { "id": "kr_logic_prop_normal", "l": "Normal forms (CNF, DNF)" },
                                        { "id": "kr_logic_prop_deduction", "l": "Deduction: natural deduction, sequent calculus, resolution", "tool": "Prover9, Vampire" }
                                    ]
                                },
                                {
                                    "id": "kr_logic_fol",
                                    "l": "First‑order logic (FOL)",
                                    "ch": [
                                        { "id": "kr_logic_fol_syntax", "l": "Terms, predicates, quantifiers (∀, ∃)" },
                                        { "id": "kr_logic_fol_sem", "l": "Structures, interpretation, satisfaction, models" },
                                        { "id": "kr_logic_fol_proof", "l": "Proof systems (Hilbert, Gentzen), unification", "tool": "Lean, Coq, Isabelle" },
                                        { "id": "kr_logic_fol_res", "l": "Resolution theorem proving, Skolemisation, Herbrand models", "tool": "Vampire, E prover" },
                                        { "id": "kr_logic_fol_decidable", "l": "Decidable fragments (monadic, guarded, two‑variable)" }
                                    ]
                                },
                                {
                                    "id": "kr_logic_higher",
                                    "l": "Higher‑order and modal logics",
                                    "ch": [
                                        { "id": "kr_logic_modal", "l": "Modal logic (K, S4, S5) – necessity, possibility", "dev": "Saul Kripke" },
                                        { "id": "kr_logic_temporal", "l": "Temporal logic (LTL, CTL, CTL*), model checking", "tool": "NuSMV, SPIN", "dev": "Amir Pnueli" },
                                        { "id": "kr_logic_epistemic", "l": "Epistemic logic (knowledge, belief)" },
                                        { "id": "kr_logic_hol", "l": "Higher‑order logic (simple type theory)", "tool": "HOL Light, HOL4" }
                                    ]
                                },
                                {
                                    "id": "kr_logic_desc",
                                    "l": "Description logics",
                                    "ch": [
                                        { "id": "kr_logic_desc_al", "l": "ALC (Attributive Language with Complement)" },
                                        { "id": "kr_logic_desc_el", "l": "EL (lightweight, used in ontologies)" },
                                        { "id": "kr_logic_desc_shoq", "l": "SHOQ, SROIQ (OWL 2 DL)" },
                                        { "id": "kr_logic_desc_reason", "l": "Tableaux algorithms, standard reasoning tasks", "tool": "Pellet, HermiT, FaCT++", "dev": "University of Manchester, Oxford" }
                                    ]
                                },
                                {
                                    "id": "kr_logic_nonmon",
                                    "l": "Non‑monotonic logic",
                                    "ch": [
                                        { "id": "kr_logic_nonmon_default", "l": "Default logic (Reiter)", "dev": "Ray Reiter" },
                                        { "id": "kr_logic_nonmon_circ", "l": "Circumscription", "dev": "John McCarthy" },
                                        { "id": "kr_logic_nonmon_autoepistemic", "l": "Autoepistemic logic" }
                                    ]
                                }
                            ]
                        },
                        {
                            "id": "kr_onto",
                            "l": "Ontologies and Semantic Web",
                            "ch": [
                                {
                                    "id": "kr_onto_basic",
                                    "l": "Ontology foundations",
                                    "ch": [
                                        { "id": "kr_onto_basic_concepts", "l": "Classes, properties, individuals, axioms" },
                                        { "id": "kr_onto_basic_tbox", "l": "TBox (terminological) vs ABox (assertional)" },
                                        { "id": "kr_onto_basic_reason", "l": "Ontology reasoning (classification, consistency)", "tool": "Protégé (Stanford)" }
                                    ]
                                },
                                {
                                    "id": "kr_onto_languages",
                                    "l": "Ontology languages",
                                    "ch": [
                                        {
                                            "id": "kr_onto_owl",
                                            "l": "OWL (Web Ontology Language)",
                                            "ch": [
                                                { "id": "kr_onto_owl_el", "l": "OWL EL (for large ontologies)" },
                                                { "id": "kr_onto_owl_ql", "l": "OWL QL (for query answering)" },
                                                { "id": "kr_onto_owl_rl", "l": "OWL RL (rule‑based)" }
                                            ],
                                            "dev": "W3C (World Wide Web Consortium)"
                                        },
                                        {
                                            "id": "kr_onto_rdf",
                                            "l": "RDF and RDFS",
                                            "ch": [
                                                { "id": "kr_onto_rdf_triple", "l": "RDF triples (subject, predicate, object)" },
                                                { "id": "kr_onto_rdf_schema", "l": "RDFS (rdfs:subClassOf, rdfs:subPropertyOf)" }
                                            ]
                                        },
                                        { "id": "kr_onto_shacl", "l": "SHACL (constraint language)", "dev": "W3C" }
                                    ]
                                },
                                {
                                    "id": "kr_onto_eng",
                                    "l": "Ontology engineering",
                                    "ch": [
                                        { "id": "kr_onto_eng_method", "l": "Methodologies (NeOn, Methontology)" },
                                        { "id": "kr_onto_eng_tools", "l": "Editors (Protégé, TopBraid)", "product": "Protégé (Stanford), TopBraid", "dev": "Stanford University" },
                                        { "id": "kr_onto_eng_align", "l": "Ontology alignment, matching, mapping", "tool": "LogMap, AML" }
                                    ]
                                },
                                {
                                    "id": "kr_onto_upper",
                                    "l": "Upper ontologies",
                                    "ch": [
                                        { "id": "kr_onto_upper_sumo", "l": "SUMO (Suggested Upper Merged Ontology)", "dev": "Adam Pease" },
                                        { "id": "kr_onto_upper_cyc", "l": "Cyc / OpenCyc", "product": "Cyc (Cycorp)", "dev": "Doug Lenat" },
                                        { "id": "kr_onto_upper_bfo", "l": "BFO (Basic Formal Ontology)", "dev": "Barry Smith (SUNY Buffalo)" }
                                    ]
                                },
                                {
                                    "id": "kr_onto_domain",
                                    "l": "Domain‑specific ontologies",
                                    "ch": [
                                        { "id": "kr_onto_domain_bio", "l": "Bioinformatics (GO, SNOMED CT)", "product": "Gene Ontology (GO), SNOMED CT", "dev": "Gene Ontology Consortium, SNOMED International" },
                                        { "id": "kr_onto_domain_comm", "l": "Enterprise (schema.org, FOAF)", "product": "schema.org (Google, Microsoft, etc.), FOAF", "dev": "Google, Microsoft, Yahoo" }
                                    ]
                                }
                            ]
                        },
                        {
                            "id": "kr_kg",
                            "l": "Knowledge Graphs",
                            "ch": [
                                {
                                    "id": "kr_kg_basic",
                                    "l": "Knowledge graph fundamentals",
                                    "ch": [
                                        { "id": "kr_kg_basic_def", "l": "Nodes (entities), edges (relations), properties" },
                                        { "id": "kr_kg_basic_schema", "l": "Schema vs instance, graph models (property graphs, RDF)" }
                                    ]
                                },
                                {
                                    "id": "kr_kg_construct",
                                    "l": "KG construction",
                                    "ch": [
                                        {
                                            "id": "kr_kg_construct_info_ext",
                                            "l": "Information extraction for KGs",
                                            "ch": [
                                                { "id": "kr_kg_construct_ner", "l": "Named entity recognition", "tool": "spaCy, Stanza, BERT" },
                                                { "id": "kr_kg_construct_re", "l": "Relation extraction (distant supervision, few‑shot)", "tool": "REBEL, OpenNRE" }
                                            ]
                                        },
                                        { "id": "kr_kg_construct_fusion", "l": "Entity resolution, coreference, link discovery", "tool": "Dedupe, OpenRefine" },
                                        { "id": "kr_kg_construct_curation", "l": "Human‑in‑the‑loop curation (Wikidata, Freebase)", "product": "Wikidata (Wikimedia), Freebase (Google)", "dev": "Wikimedia Foundation, Google" }
                                    ]
                                },
                                {
                                    "id": "kr_kg_storage",
                                    "l": "KG storage and querying",
                                    "ch": [
                                        { "id": "kr_kg_storage_tdb", "l": "Triple stores (Jena, Virtuoso)", "product": "Apache Jena, Virtuoso (OpenLink)", "dev": "Apache, OpenLink" },
                                        { "id": "kr_kg_storage_graphdb", "l": "Graph databases (Neo4j, Amazon Neptune)", "product": "Neo4j (Neo4j Inc.), Amazon Neptune", "dev": "Neo4j, Amazon" },
                                        { "id": "kr_kg_storage_sparql", "l": "SPARQL query language", "dev": "W3C" }
                                    ]
                                },
                                {
                                    "id": "kr_kg_completion",
                                    "l": "Knowledge graph completion (KGC)",
                                    "ch": [
                                        {
                                            "id": "kr_kg_completion_embed",
                                            "l": "Embedding‑based methods",
                                            "ch": [
                                                { "id": "kr_kg_completion_transE", "l": "TransE, TransH, TransR", "dev": "Bordes et al. (Google)" },
                                                { "id": "kr_kg_completion_distmult", "l": "DistMult, ComplEx", "dev": "Yang et al. (Facebook), Trouillon et al." },
                                                { "id": "kr_kg_completion_rotate", "l": "RotatE, QuatE", "dev": "Sun et al. (Baidu), Zhang et al." },
                                                { "id": "kr_kg_completion_gnn", "l": "GNN‑based (R‑GCN, CompGCN)", "tool": "PyTorch Geometric, DGL" }
                                            ]
                                        },
                                        { "id": "kr_kg_completion_rule", "l": "Rule‑based (AMIE, RuleGuesser)", "tool": "AMIE (Max Planck)", "dev": "Galárraga et al." },
                                        { "id": "kr_kg_completion_llm", "l": "LLM‑augmented completion", "hw": "GPU (8GB+ VRAM)", "tool": "GPT‑4, LLaMA", "dev": "OpenAI, Meta" }
                                    ]
                                },
                                {
                                    "id": "kr_kg_temporal",
                                    "l": "Temporal knowledge graphs",
                                    "ch": [
                                        { "id": "kr_kg_temporal_model", "l": "Time‑aware embeddings (T‑TransE, TeLM)" },
                                        { "id": "kr_kg_temporal_reason", "l": "Temporal query answering" }
                                    ]
                                },
                                {
                                    "id": "kr_kg_kg",
                                    "l": "Notable knowledge graphs",
                                    "ch": [
                                        { "id": "kr_kg_kg_wikidata", "l": "Wikidata", "product": "Wikidata", "dev": "Wikimedia Foundation" },
                                        { "id": "kr_kg_kg_dbpedia", "l": "DBpedia", "dev": "University of Leipzig" },
                                        { "id": "kr_kg_kg_yago", "l": "YAGO", "dev": "Max Planck Institute" },
                                        { "id": "kr_kg_kg_google", "l": "Google Knowledge Graph", "product": "Google Knowledge Graph", "dev": "Google" },
                                        { "id": "kr_kg_kg_microsoft", "l": "Microsoft Satori", "dev": "Microsoft" }
                                    ]
                                }
                            ]
                        },
                        {
                            "id": "kr_reason",
                            "l": "Automated Reasoning",
                            "ch": [
                                {
                                    "id": "kr_reason_proof",
                                    "l": "Theorem proving",
                                    "ch": [
                                        { "id": "kr_reason_proof_res", "l": "Resolution (binary, hyper, paramodulation)", "dev": "John Alan Robinson" },
                                        { "id": "kr_reason_proof_super", "l": "Superposition calculus", "dev": "Leo Bachmair, Harald Ganzinger" },
                                        { "id": "kr_reason_proof_int", "l": "Interactive theorem proving (Coq, Isabelle, Lean)", "product": "Coq, Isabelle, Lean", "dev": "INRIA, University of Cambridge, Microsoft Research" }
                                    ]
                                },
                                {
                                    "id": "kr_reason_sat",
                                    "l": "SAT solving",
                                    "ch": [
                                        { "id": "kr_reason_sat_dpll", "l": "DPLL algorithm", "dev": "Davis, Putnam, Logemann, Loveland" },
                                        { "id": "kr_reason_sat_cdcl", "l": "CDCL (conflict‑driven clause learning)" },
                                        { "id": "kr_reason_sat_heuristics", "l": "VSIDS, branching heuristics" },
                                        { "id": "kr_reason_sat_solvers", "l": "Solvers (MiniSAT, Glucose, CaDiCaL)", "product": "MiniSAT (Chalmers), CaDiCaL (Linz)", "dev": "Niklas Sörensson, Armin Biere" }
                                    ]
                                },
                                {
                                    "id": "kr_reason_smt",
                                    "l": "SMT solving",
                                    "ch": [
                                        { "id": "kr_reason_smt_theories", "l": "Theories (linear arithmetic, arrays, bit‑vectors, strings)" },
                                        { "id": "kr_reason_smt_algo", "l": "Eager / lazy SMT, DPLL(T)" },
                                        { "id": "kr_reason_smt_solvers", "l": "Z3, CVC5, Yices", "product": "Z3 (Microsoft), CVC5 (Stanford)", "dev": "Microsoft (Z3), Stanford (CVC5)" }
                                    ]
                                },
                                {
                                    "id": "kr_reason_csp",
                                    "l": "Constraint satisfaction problems",
                                    "ch": [
                                        { "id": "kr_reason_csp_backtrack", "l": "Backtracking, forward checking" },
                                        { "id": "kr_reason_csp_consistency", "l": "Arc consistency, path consistency (AC‑3, PC‑2)" },
                                        { "id": "kr_reason_csp_global", "l": "Global constraints (alldifferent, cumulative)" }
                                    ]
                                },
                                {
                                    "id": "kr_reason_asp",
                                    "l": "Answer set programming",
                                    "ch": [
                                        { "id": "kr_reason_asp_syntax", "l": "Rules, choice rules, constraints" },
                                        { "id": "kr_reason_asp_sem", "l": "Stable model semantics", "dev": "Michael Gelfond, Vladimir Lifschitz" },
                                        { "id": "kr_reason_asp_solvers", "l": "clingo, DLV", "product": "clingo (University of Potsdam)", "dev": "Martin Gebser, Roland Kaminski" }
                                    ]
                                },
                                {
                                    "id": "kr_reason_abduction",
                                    "l": "Abductive reasoning",
                                    "ch": [
                                        { "id": "kr_reason_abduction_ltms", "l": "Logic‑based abduction, ATMS" },
                                        { "id": "kr_reason_abduction_diag", "l": "Diagnosis, explanation generation" }
                                    ]
                                }
                            ]
                        },
                        {
                            "id": "kr_plan",
                            "l": "Automated Planning",
                            "ch": [
                                {
                                    "id": "kr_plan_classical",
                                    "l": "Classical planning",
                                    "ch": [
                                        { "id": "kr_plan_classical_strips", "l": "STRIPS language", "dev": "Richard Fikes, Nils Nilsson" },
                                        {
                                            "id": "kr_plan_classical_pddl",
                                            "l": "PDDL (Planning Domain Definition Language)",
                                            "ch": [
                                                { "id": "kr_plan_pddl_basic", "l": "Basic PDDL (predicates, actions, goals)" },
                                                { "id": "kr_plan_pddl_ext", "l": "Extensions (numeric, temporal, probabilistic)" }
                                            ],
                                            "dev": "Drew McDermott, AAAI"
                                        },
                                        {
                                            "id": "kr_plan_classical_algo",
                                            "l": "Planning algorithms",
                                            "ch": [
                                                { "id": "kr_plan_algo_ff", "l": "Forward search, backward search" },
                                                { "id": "kr_plan_algo_heuristic", "l": "Heuristic search (FF heuristic, landmarks)" },
                                                { "id": "kr_plan_algo_graphplan", "l": "GraphPlan, SATPlan" }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "id": "kr_plan_htn",
                                    "l": "Hierarchical task networks",
                                    "ch": [
                                        { "id": "kr_plan_htn_decomp", "l": "Task decomposition, methods" },
                                        { "id": "kr_plan_htn_algo", "l": "HTN planning algorithms (SHOP, SHOP2)", "dev": "Dana Nau" }
                                    ]
                                },
                                {
                                    "id": "kr_plan_temporal",
                                    "l": "Temporal planning",
                                    "ch": [
                                        { "id": "kr_plan_temporal_durative", "l": "Durative actions, concurrent actions" },
                                        { "id": "kr_plan_temporal_tlp", "l": "Temporal Logic Programming" }
                                    ]
                                },
                                {
                                    "id": "kr_plan_prob",
                                    "l": "Probabilistic planning",
                                    "ch": [
                                        { "id": "kr_plan_prob_mdp", "l": "MDP planning (value iteration, policy iteration)", "tool": "PRISM, MDPtoolbox" },
                                        { "id": "kr_plan_prob_pomdp", "l": "POMDP planning (point‑based, online)", "tool": "POMDPy, APPL" },
                                        { "id": "kr_plan_prob_rddl", "l": "RDDL (Relational Dynamic Influence Diagram)" }
                                    ]
                                },
                                {
                                    "id": "kr_plan_multi",
                                    "l": "Multi‑agent planning",
                                    "ch": [
                                        { "id": "kr_plan_multi_coord", "l": "Coordination, distributed planning (MAP)" },
                                        { "id": "kr_plan_multi_ma", "l": "Multi‑agent MDPs (MMDP, Dec‑POMDP)" }
                                    ]
                                },
                                { "id": "kr_plan_cont", "l": "Continuous and hybrid planning", "tool": "Hybrid automata" }
                            ]
                        },
                        {
                            "id": "kr_ns",
                            "l": "Neuro‑Symbolic AI",
                            "ch": [
                                {
                                    "id": "kr_ns_overview",
                                    "l": "Foundations",
                                    "ch": [
                                        { "id": "kr_ns_why", "l": "Bridging symbolic reasoning and neural learning" },
                                        { "id": "kr_ns_paradigms", "l": "Paradigms (neural guided, symbolic guided, integrated)" }
                                    ]
                                },
                                {
                                    "id": "kr_ns_logic",
                                    "l": "Differentiable logic",
                                    "ch": [
                                        { "id": "kr_ns_logic_problog", "l": "ProbLog, DeepProbLog", "tool": "ProbLog (KU Leuven)", "dev": "Luc De Raedt" },
                                        { "id": "kr_ns_logic_ltn", "l": "Logic tensor networks (LTN)", "tool": "LTN (PyTorch)", "dev": "Luciano Serafini" },
                                        { "id": "kr_ns_logic_neurallp", "l": "Neural logic programming (∂ILP)", "dev": "Richard Evans" }
                                    ]
                                },
                                {
                                    "id": "kr_ns_graph",
                                    "l": "Graph‑based neuro‑symbolic",
                                    "ch": [
                                        { "id": "kr_ns_graph_gnn", "l": "GNNs for logical inference" },
                                        { "id": "kr_ns_graph_gnn2", "l": "Neural theorem proving with GNNs", "dev": "Minghua Li" }
                                    ]
                                },
                                {
                                    "id": "kr_ns_reason",
                                    "l": "Neural reasoning engines",
                                    "ch": [
                                        { "id": "kr_ns_reason_nmt", "l": "Neural theorem provers (NTM, deep reasoning)", "dev": "Maxwell Crouse" },
                                        { "id": "kr_ns_reason_nmt2", "l": "Transformer‑based reasoning", "tool": "GPT‑4, Gemini (reasoning)" }
                                    ]
                                },
                                {
                                    "id": "kr_ns_know",
                                    "l": "Knowledge integration",
                                    "ch": [
                                        { "id": "kr_ns_know_embed", "l": "Logic rules as regularisation in embeddings" },
                                        { "id": "kr_ns_know_constraints", "l": "Neural networks with symbolic constraints (semantic loss)", "dev": "Jingyi Xu" }
                                    ]
                                },
                                {
                                    "id": "kr_ns_learning",
                                    "l": "Learning from symbolic data",
                                    "ch": [
                                        { "id": "kr_ns_learning_ilp", "l": "Inductive logic programming (ILP) + neural", "tool": "ILP (Aleph, Progol)", "dev": "Stephen Muggleton" }
                                    ]
                                }
                            ]
                        },
                        {
                            "id": "kr_common",
                            "l": "Commonsense Knowledge and Reasoning",
                            "ch": [
                                { "id": "kr_common_cyc", "l": "Cyc / OpenCyc (large commonsense KB)", "product": "Cyc (Cycorp)", "dev": "Doug Lenat" },
                                { "id": "kr_common_conceptnet", "l": "ConceptNet", "product": "ConceptNet (MIT)", "dev": "MIT Media Lab" },
                                { "id": "kr_common_qual", "l": "Qualitative reasoning (qualitative physics, naive physics)", "dev": "Ken Forbus, Johan de Kleer" },
                                { "id": "kr_common_script", "l": "Scripts, frames, schemas", "dev": "Roger Schank, Marvin Minsky" },
                                { "id": "kr_common_bench", "l": "Commonsense benchmarks (Winograd schema, COPA, HellaSwag, PIQA)", "tool": "EleutherAI LM Harness" },
                                { "id": "kr_common_llm", "l": "Commonsense in LLMs (limitations and prompting)", "hw": "GPU (8GB+ VRAM)", "tool": "GPT‑4, LLaMA" }
                            ]
                        },
                        {
                            "id": "kr_search",
                            "l": "Search Algorithms (Reasoning as Search)",
                            "ch": [
                                {
                                    "id": "kr_search_uninf",
                                    "l": "Uninformed search",
                                    "ch": [
                                        { "id": "kr_search_uninf_bfs", "l": "BFS", "hw": "CPU" },
                                        { "id": "kr_search_uninf_dfs", "l": "DFS" },
                                        { "id": "kr_search_uninf_ucs", "l": "Uniform cost search" }
                                    ]
                                },
                                {
                                    "id": "kr_search_inf",
                                    "l": "Informed search",
                                    "ch": [
                                        { "id": "kr_search_inf_greedy", "l": "Greedy best‑first" },
                                        { "id": "kr_search_inf_astar", "l": "A* (admissible heuristics)", "dev": "Peter Hart, Nils Nilsson" },
                                        { "id": "kr_search_inf_ida", "l": "IDA*", "dev": "Richard Korf" }
                                    ]
                                },
                                {
                                    "id": "kr_search_adversarial",
                                    "l": "Adversarial search",
                                    "ch": [
                                        { "id": "kr_search_adversarial_minimax", "l": "Minimax" },
                                        { "id": "kr_search_adversarial_ab", "l": "Alpha‑beta pruning", "dev": "John McCarthy" },
                                        { "id": "kr_search_adversarial_expect", "l": "Expectiminimax (for stochastic games)" }
                                    ]
                                },
                                {
                                    "id": "kr_search_mcts",
                                    "l": "Monte Carlo tree search",
                                    "ch": [
                                        { "id": "kr_search_mcts_sel", "l": "Selection (UCT, PUCT)", "dev": "Rémi Coulom (UCT)" },
                                        { "id": "kr_search_mcts_exp", "l": "Expansion" },
                                        { "id": "kr_search_mcts_sim", "l": "Simulation / rollout" },
                                        { "id": "kr_search_mcts_back", "l": "Backpropagation" },
                                        { "id": "kr_search_mcts_app", "l": "Applications (AlphaGo, AlphaZero, MuZero)", "product": "AlphaGo, AlphaZero (DeepMind)", "dev": "DeepMind" }
                                    ]
                                },
                                {
                                    "id": "kr_search_local",
                                    "l": "Local search",
                                    "ch": [
                                        { "id": "kr_search_local_hill", "l": "Hill climbing" },
                                        { "id": "kr_search_local_sa", "l": "Simulated annealing", "dev": "Scott Kirkpatrick" },
                                        { "id": "kr_search_local_tabu", "l": "Tabu search", "dev": "Fred Glover" }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                // ─────────────────────────────────────────────────────────
                // 4. MACHINE LEARNING (core umbrella – includes DL, RL, etc.)
                // ─────────────────────────────────────────────────────────
                {
                    "id": "ml",
                    "c": "ml",
                    "l": "Machine Learning",
                    "ch": [
                        {
                            "id": "ml_sup",
                            "l": "Supervised Learning",
                            "ch": [
                                {
                                    "id": "ml_sup_class",
                                    "l": "Classification",
                                    "ch": [
                                        { "id": "ml_sup_class_bin", "l": "Binary classification", "hw": "CPU (any), GPU optional for large datasets", "tool": "scikit-learn, PyTorch, TensorFlow, XGBoost", "product": "AWS SageMaker, Google AutoML", "dev": "Various" },
                                        { "id": "ml_sup_class_multi", "l": "Multi‑class classification", "hw": "CPU, GPU for deep learning", "tool": "scikit-learn (LogisticRegression, SVC), PyTorch (CrossEntropyLoss)", "product": "Azure ML, Vertex AI" },
                                        { "id": "ml_sup_class_multilabel", "l": "Multi‑label classification", "hw": "CPU, GPU", "tool": "scikit-learn (MultiLabelBinarizer, OneVsRestClassifier), PyTorch (BCEWithLogitsLoss)" },
                                        { "id": "ml_sup_class_ordinal", "l": "Ordinal classification", "hw": "CPU", "tool": "scikit-learn (LogisticRegression with custom loss), lightGBM (objective='lambdarank')" },
                                        {
                                            "id": "ml_sup_class_imb",
                                            "l": "Imbalanced learning",
                                            "ch": [
                                                { "id": "ml_sup_class_imb_resample", "l": "Resampling (SMOTE, ADASYN)", "hw": "CPU", "tool": "imbalanced-learn (SMOTE, ADASYN)", "dev": "Nitesh Chawla (SMOTE), Haibo He (ADASYN)" },
                                                { "id": "ml_sup_class_imb_cost", "l": "Cost‑sensitive learning", "hw": "CPU", "tool": "scikit-learn (class_weight), XGBoost (scale_pos_weight)" },
                                                { "id": "ml_sup_class_imb_focal", "l": "Focal loss", "hw": "GPU (for neural nets)", "tool": "PyTorch, TensorFlow (custom loss)", "dev": "Facebook AI (Lin et al.)" }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "id": "ml_sup_reg",
                                    "l": "Regression",
                                    "ch": [
                                        {
                                            "id": "ml_sup_reg_linear",
                                            "l": "Linear regression",
                                            "ch": [
                                                { "id": "ml_sup_reg_linear_simple", "l": "Simple linear", "hw": "CPU", "tool": "scikit-learn (LinearRegression), statsmodels", "dev": "Francis Galton (regression concept)" },
                                                { "id": "ml_sup_reg_linear_multi", "l": "Multiple linear", "hw": "CPU", "tool": "scikit-learn, statsmodels (OLS)" }
                                            ]
                                        },
                                        { "id": "ml_sup_reg_poly", "l": "Polynomial regression", "hw": "CPU", "tool": "scikit-learn (PolynomialFeatures + LinearRegression)" },
                                        { "id": "ml_sup_reg_ridge", "l": "Ridge (L2 regularisation)", "hw": "CPU", "tool": "scikit-learn (Ridge), glmnet", "dev": "Arthur E. Hoerl, Robert W. Kennard" },
                                        { "id": "ml_sup_reg_lasso", "l": "Lasso (L1, sparse)", "hw": "CPU", "tool": "scikit-learn (Lasso), glmnet", "dev": "Robert Tibshirani" },
                                        { "id": "ml_sup_reg_enet", "l": "ElasticNet", "hw": "CPU", "tool": "scikit-learn (ElasticNet)", "dev": "Zou & Hastie" },
                                        { "id": "ml_sup_reg_log", "l": "Logistic regression (for probability)", "hw": "CPU, GPU for large data", "tool": "scikit-learn (LogisticRegression), PyTorch, TensorFlow" },
                                        {
                                            "id": "ml_sup_reg_gpr",
                                            "l": "Gaussian process regression",
                                            "ch": [
                                                { "id": "ml_sup_reg_gpr_kernel", "l": "Kernel functions (RBF, Matérn)", "hw": "CPU, GPU (GPyTorch)", "tool": "scikit-learn (GaussianProcessRegressor), GPyTorch, GPflow" },
                                                { "id": "ml_sup_reg_gpr_inf", "l": "Inference (exact, sparse)", "hw": "CPU, GPU (for sparse variational)", "tool": "GPyTorch, GPflow" }
                                            ]
                                        },
                                        { "id": "ml_sup_reg_quantile", "l": "Quantile regression", "hw": "CPU", "tool": "statsmodels (QuantReg), scikit-learn (QuantileRegressor)", "dev": "Roger Koenker" },
                                        { "id": "ml_sup_reg_svr", "l": "Support vector regression", "hw": "CPU", "tool": "scikit-learn (SVR), libsvm", "dev": "Vladimir Vapnik" }
                                    ]
                                },
                                {
                                    "id": "ml_sup_tree",
                                    "l": "Tree‑based Methods",
                                    "ch": [
                                        {
                                            "id": "ml_sup_tree_dt",
                                            "l": "Decision trees",
                                            "ch": [
                                                { "id": "ml_sup_tree_dt_id3", "l": "ID3 (information gain)", "hw": "CPU", "tool": "scikit-learn (criterion='entropy'), Weka", "dev": "Ross Quinlan" },
                                                { "id": "ml_sup_tree_dt_c45", "l": "C4.5 (gain ratio)", "hw": "CPU", "tool": "Weka, R (C5.0)", "dev": "Ross Quinlan" },
                                                { "id": "ml_sup_tree_dt_cart", "l": "CART (Gini, MSE)", "hw": "CPU", "tool": "scikit-learn (DecisionTreeClassifier/Regressor)", "dev": "Breiman, Friedman, Olshen, Stone" }
                                            ]
                                        },
                                        {
                                            "id": "ml_sup_tree_rf",
                                            "l": "Random forest",
                                            "ch": [
                                                { "id": "ml_sup_tree_rf_bag", "l": "Bagging, bootstrapping", "hw": "CPU, GPU (RAPIDS cuML)", "tool": "scikit-learn (RandomForestClassifier), XGBoost, LightGBM", "dev": "Leo Breiman" },
                                                { "id": "ml_sup_tree_rf_feat", "l": "Random subspace method", "hw": "CPU", "tool": "scikit-learn (max_features parameter)" },
                                                { "id": "ml_sup_tree_rf_imp", "l": "Feature importance (permutation, Gini)", "hw": "CPU", "tool": "scikit-learn (feature_importances_, permutation_importance)" }
                                            ]
                                        },
                                        {
                                            "id": "ml_sup_tree_gb",
                                            "l": "Gradient boosting",
                                            "ch": [
                                                { "id": "ml_sup_tree_gb_adaboost", "l": "AdaBoost", "hw": "CPU", "tool": "scikit-learn (AdaBoostClassifier)", "dev": "Freund & Schapire" },
                                                { "id": "ml_sup_tree_gb_xgb", "l": "XGBoost", "hw": "CPU, GPU (CUDA)", "tool": "xgboost library", "product": "XGBoost (DMLC)", "dev": "Tianqi Chen" },
                                                { "id": "ml_sup_tree_gb_lgbm", "l": "LightGBM", "hw": "CPU, GPU (OpenCL)", "tool": "lightgbm library", "product": "LightGBM (Microsoft)", "dev": "Microsoft Research" },
                                                { "id": "ml_sup_tree_gb_catboost", "l": "CatBoost", "hw": "CPU, GPU", "tool": "catboost library", "product": "CatBoost (Yandex)", "dev": "Yandex" },
                                                { "id": "ml_sup_tree_gb_hist", "l": "Histogram‑based GBDT", "hw": "CPU", "tool": "scikit-learn (HistGradientBoostingClassifier)", "dev": "scikit-learn community" }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "id": "ml_sup_svm",
                                    "l": "Support Vector Machines",
                                    "ch": [
                                        { "id": "ml_sup_svm_hard", "l": "Hard margin SVM", "hw": "CPU", "tool": "scikit-learn (SVC kernel='linear', C=inf)", "dev": "Vladimir Vapnik, Alexey Chervonenkis" },
                                        { "id": "ml_sup_svm_soft", "l": "Soft margin (C parameter)", "hw": "CPU", "tool": "scikit-learn (SVC, C parameter)" },
                                        {
                                            "id": "ml_sup_svm_kernel",
                                            "l": "Kernel trick",
                                            "ch": [
                                                { "id": "ml_sup_svm_kernel_linear", "l": "Linear", "hw": "CPU" },
                                                { "id": "ml_sup_svm_kernel_poly", "l": "Polynomial" },
                                                { "id": "ml_sup_svm_kernel_rbf", "l": "RBF / Gaussian" },
                                                { "id": "ml_sup_svm_kernel_sigmoid", "l": "Sigmoid" },
                                                { "id": "ml_sup_svm_kernel_custom", "l": "Custom (Mercer's condition)" }
                                            ]
                                        },
                                        { "id": "ml_sup_svm_svr", "l": "SVR (support vector regression)", "hw": "CPU", "tool": "scikit-learn (SVR)" },
                                        { "id": "ml_sup_svm_oneclass", "l": "One‑class SVM for anomaly detection", "hw": "CPU", "tool": "scikit-learn (OneClassSVM)", "dev": "Bernhard Schölkopf" }
                                    ]
                                },
                                {
                                    "id": "ml_sup_prob",
                                    "l": "Probabilistic Classifiers",
                                    "ch": [
                                        {
                                            "id": "ml_sup_prob_nb",
                                            "l": "Naive Bayes",
                                            "ch": [
                                                { "id": "ml_sup_prob_nb_gauss", "l": "Gaussian NB", "hw": "CPU", "tool": "scikit-learn (GaussianNB)" },
                                                { "id": "ml_sup_prob_nb_mult", "l": "Multinomial NB", "hw": "CPU", "tool": "scikit-learn (MultinomialNB)" },
                                                { "id": "ml_sup_prob_nb_bern", "l": "Bernoulli NB", "hw": "CPU", "tool": "scikit-learn (BernoulliNB)" }
                                            ]
                                        },
                                        {
                                            "id": "ml_sup_prob_bayesnet",
                                            "l": "Bayesian networks",
                                            "ch": [
                                                { "id": "ml_sup_prob_bayesnet_struct", "l": "Structure learning (score‑based, constraint‑based)", "hw": "CPU", "tool": "pgmpy, bnlearn", "dev": "Judea Pearl" },
                                                { "id": "ml_sup_prob_bayesnet_param", "l": "Parameter estimation (MLE, Bayesian)", "hw": "CPU", "tool": "pgmpy" },
                                                { "id": "ml_sup_prob_bayesnet_inf", "l": "Inference (exact, approximate)", "hw": "CPU", "tool": "pgmpy (VariableElimination, BeliefPropagation)" }
                                            ]
                                        },
                                        {
                                            "id": "ml_sup_prob_hmm",
                                            "l": "Hidden Markov models",
                                            "ch": [
                                                { "id": "ml_sup_prob_hmm_eval", "l": "Evaluation (forward‑backward)", "hw": "CPU", "tool": "hmmlearn, pomegranate" },
                                                { "id": "ml_sup_prob_hmm_dec", "l": "Decoding (Viterbi)", "hw": "CPU", "tool": "hmmlearn" },
                                                { "id": "ml_sup_prob_hmm_learn", "l": "Learning (Baum‑Welch)", "hw": "CPU", "tool": "hmmlearn" }
                                            ]
                                        },
                                        {
                                            "id": "ml_sup_prob_crf",
                                            "l": "Conditional random fields",
                                            "ch": [
                                                { "id": "ml_sup_prob_crf_linear", "l": "Linear chain CRF", "hw": "CPU", "tool": "sklearn-crfsuite, PyCRFSuite", "dev": "John Lafferty" },
                                                { "id": "ml_sup_prob_crf_gen", "l": "General CRF", "hw": "CPU", "tool": "PyStruct" }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "id": "ml_sup_knn",
                                    "l": "Instance‑based Learning",
                                    "ch": [
                                        { "id": "ml_sup_knn_knn", "l": "k‑Nearest neighbours (kNN)", "hw": "CPU, GPU (cuML for large datasets)", "tool": "scikit-learn (KNeighborsClassifier), FAISS", "dev": "Evelyn Fix, Joseph Hodges" },
                                        { "id": "ml_sup_knn_lwr", "l": "Locally weighted regression", "hw": "CPU", "tool": "scikit-learn (Lowess), statsmodels (lowess)", "dev": "William S. Cleveland" },
                                        { "id": "ml_sup_knn_cbr", "l": "Case‑based reasoning", "hw": "CPU", "tool": "myCBR, jColibri", "dev": "Janet Kolodner" }
                                    ]
                                }
                            ]
                        },
                        {
                            "id": "ml_unsup",
                            "l": "Unsupervised Learning",
                            "ch": [
                                {
                                    "id": "ml_unsup_clust",
                                    "l": "Clustering",
                                    "ch": [
                                        {
                                            "id": "ml_unsup_clust_partition",
                                            "l": "Partitional",
                                            "ch": [
                                                { "id": "ml_unsup_clust_kmeans", "l": "K‑means (Lloyd, Elkan)", "hw": "CPU, GPU (cuML)", "tool": "scikit-learn (KMeans), FAISS", "dev": "Stuart Lloyd, James MacQueen" },
                                                { "id": "ml_unsup_clust_kmedoids", "l": "K‑medoids (PAM)", "hw": "CPU", "tool": "scikit-learn-extra (KMedoids)", "dev": "Leonard Kaufman, Peter Rousseeuw" },
                                                { "id": "ml_unsup_clust_kmeanspp", "l": "K‑means++ initialisation", "hw": "CPU", "tool": "scikit-learn (KMeans, init='k-means++')", "dev": "David Arthur, Sergei Vassilvitskii" }
                                            ]
                                        },
                                        {
                                            "id": "ml_unsup_clust_density",
                                            "l": "Density‑based",
                                            "ch": [
                                                { "id": "ml_unsup_clust_dbscan", "l": "DBSCAN", "hw": "CPU, GPU (cuML)", "tool": "scikit-learn (DBSCAN)", "dev": "Martin Ester, Hans‑Peter Kriegel" },
                                                { "id": "ml_unsup_clust_hdbscan", "l": "HDBSCAN", "hw": "CPU", "tool": "hdbscan library", "dev": "Leland McInnes, John Healy" },
                                                { "id": "ml_unsup_clust_optics", "l": "OPTICS", "hw": "CPU", "tool": "scikit-learn (OPTICS)" },
                                                { "id": "ml_unsup_clust_meanshift", "l": "Mean shift", "hw": "CPU", "tool": "scikit-learn (MeanShift)", "dev": "K. Fukunaga, L. Hostetler" }
                                            ]
                                        },
                                        {
                                            "id": "ml_unsup_clust_hier",
                                            "l": "Hierarchical",
                                            "ch": [
                                                { "id": "ml_unsup_clust_hier_aggl", "l": "Agglomerative (single, complete, average, Ward)", "hw": "CPU", "tool": "scikit-learn (AgglomerativeClustering)" },
                                                { "id": "ml_unsup_clust_hier_div", "l": "Divisive", "hw": "CPU", "tool": "scipy.cluster.hierarchy (fcluster)" },
                                                { "id": "ml_unsup_clust_hier_dend", "l": "Dendrogram, cut point", "hw": "CPU", "tool": "scipy.cluster.hierarchy (dendrogram)" }
                                            ]
                                        },
                                        {
                                            "id": "ml_unsup_clust_model",
                                            "l": "Model‑based",
                                            "ch": [
                                                { "id": "ml_unsup_clust_gmm", "l": "Gaussian mixture models (EM algorithm)", "hw": "CPU, GPU", "tool": "scikit-learn (GaussianMixture)", "dev": "Arthur Dempster, Nan Laird, Donald Rubin (EM)" },
                                                { "id": "ml_unsup_clust_bgm", "l": "Bayesian GMM (variational)", "hw": "CPU", "tool": "scikit-learn (BayesianGaussianMixture)" }
                                            ]
                                        },
                                        { "id": "ml_unsup_clust_spectral", "l": "Spectral clustering", "hw": "CPU", "tool": "scikit-learn (SpectralClustering)", "dev": "Andrew Ng, Michael Jordan" },
                                        { "id": "ml_unsup_clust_biclust", "l": "Biclustering", "hw": "CPU", "tool": "scikit-learn (SpectralBiclustering, SpectralCoclustering)" }
                                    ]
                                },
                                {
                                    "id": "ml_unsup_dimred",
                                    "l": "Dimensionality Reduction",
                                    "ch": [
                                        {
                                            "id": "ml_unsup_dimred_linear",
                                            "l": "Linear methods",
                                            "ch": [
                                                { "id": "ml_unsup_dimred_pca", "l": "PCA", "hw": "CPU, GPU (cuML)", "tool": "scikit-learn (PCA), FAISS", "dev": "Karl Pearson" },
                                                { "id": "ml_unsup_dimred_kpca", "l": "Kernel PCA", "hw": "CPU", "tool": "scikit-learn (KernelPCA)", "dev": "Bernhard Schölkopf" },
                                                { "id": "ml_unsup_dimred_ica", "l": "ICA", "hw": "CPU", "tool": "scikit-learn (FastICA)", "dev": "Pierre Comon" },
                                                { "id": "ml_unsup_dimred_lda", "l": "Linear discriminant analysis (supervised orientation)", "hw": "CPU", "tool": "scikit-learn (LinearDiscriminantAnalysis)", "dev": "Ronald Fisher" },
                                                { "id": "ml_unsup_dimred_fa", "l": "Factor analysis", "hw": "CPU", "tool": "scikit-learn (FactorAnalysis)" }
                                            ]
                                        },
                                        {
                                            "id": "ml_unsup_dimred_nonlinear",
                                            "l": "Nonlinear methods",
                                            "ch": [
                                                { "id": "ml_unsup_dimred_tsne", "l": "t‑SNE", "hw": "CPU, GPU (openTSNE)", "tool": "scikit-learn (TSNE), openTSNE", "dev": "Laurens van der Maaten, Geoffrey Hinton" },
                                                { "id": "ml_unsup_dimred_umap", "l": "UMAP", "hw": "CPU, GPU (cuML)", "tool": "umap-learn", "dev": "Leland McInnes, John Healy" },
                                                { "id": "ml_unsup_dimred_iso", "l": "Isomap", "hw": "CPU", "tool": "scikit-learn (Isomap)", "dev": "Joshua Tenenbaum" },
                                                { "id": "ml_unsup_dimred_lle", "l": "LLE (locally linear embedding)", "hw": "CPU", "tool": "scikit-learn (LocallyLinearEmbedding)", "dev": "Sam Roweis, Lawrence Saul" },
                                                { "id": "ml_unsup_dimred_ae", "l": "Autoencoders (nonlinear)", "hw": "GPU (NVIDIA GTX 1060+)", "tool": "PyTorch, TensorFlow (keras)", "dev": "Geoffrey Hinton" }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "id": "ml_unsup_anomaly",
                                    "l": "Anomaly & Outlier Detection",
                                    "ch": [
                                        { "id": "ml_unsup_anomaly_iforest", "l": "Isolation forest", "hw": "CPU", "tool": "scikit-learn (IsolationForest)", "dev": "Fei Tony Liu, Kai Ming Ting" },
                                        { "id": "ml_unsup_anomaly_lof", "l": "Local outlier factor (LOF)", "hw": "CPU", "tool": "scikit-learn (LocalOutlierFactor)" },
                                        { "id": "ml_unsup_anomaly_svm", "l": "One‑class SVM", "hw": "CPU", "tool": "scikit-learn (OneClassSVM)" },
                                        { "id": "ml_unsup_anomaly_autoenc", "l": "Autoencoder‑based", "hw": "GPU", "tool": "PyTorch, TensorFlow" },
                                        { "id": "ml_unsup_anomaly_stat", "l": "Statistical (Grubbs, Z‑score, MAD)", "hw": "CPU", "tool": "scipy.stats, statsmodels" }
                                    ]
                                },
                                {
                                    "id": "ml_unsup_assoc",
                                    "l": "Association Rule Learning",
                                    "ch": [
                                        { "id": "ml_unsup_assoc_apriori", "l": "Apriori", "hw": "CPU", "tool": "mlxtend (apriori)", "dev": "Rakesh Agrawal" },
                                        { "id": "ml_unsup_assoc_fp", "l": "FP‑Growth", "hw": "CPU", "tool": "pyfpgrowth", "dev": "Jiawei Han" },
                                        { "id": "ml_unsup_assoc_eclat", "l": "Eclat", "hw": "CPU", "tool": "mlxtend (eclat)", "dev": "Mohammed Zaki" }
                                    ]
                                },
                                {
                                    "id": "ml_unsup_density",
                                    "l": "Density Estimation",
                                    "ch": [
                                        { "id": "ml_unsup_density_kde", "l": "Kernel density estimation", "hw": "CPU", "tool": "scikit-learn (KernelDensity), scipy.stats.gaussian_kde", "dev": "Murray Rosenblatt, Emanuel Parzen" },
                                        { "id": "ml_unsup_density_parzen", "l": "Parzen window", "hw": "CPU", "tool": "scikit-learn (KernelDensity, bandwidth parameter)" },
                                        { "id": "ml_unsup_density_flow", "l": "Normalising flows (see DL‑generative)", "hw": "GPU", "tool": "PyTorch (normalizing-flows), TensorFlow Probability" }
                                    ]
                                }
                            ]
                        },
                        {
                            "id": "ml_rl",
                            "c": "rl",
                            "l": "Reinforcement Learning",
                            "ch": [
                                {
                                    "id": "ml_rl_fund",
                                    "l": "Fundamentals",
                                    "ch": [
                                        {
                                            "id": "ml_rl_fund_mdp",
                                            "l": "Markov decision processes",
                                            "ch": [
                                                { "id": "ml_rl_fund_mdp_state", "l": "State, action, reward", "hw": "CPU", "tool": "Gymnasium (OpenAI Gym), RLlib", "dev": "Richard Bellman" },
                                                { "id": "ml_rl_fund_mdp_trans", "l": "Transition dynamics, discount factor", "hw": "CPU" }
                                            ]
                                        },
                                        { "id": "ml_rl_fund_value", "l": "Value functions (V, Q, advantage)", "hw": "CPU/GPU", "tool": "Stable-Baselines3, RLlib" },
                                        { "id": "ml_rl_fund_bellman", "l": "Bellman equations (optimality)", "hw": "CPU", "dev": "Richard Bellman" },
                                        {
                                            "id": "ml_rl_fund_explore",
                                            "l": "Exploration vs exploitation",
                                            "ch": [
                                                { "id": "ml_rl_fund_explore_eg", "l": "Epsilon‑greedy", "hw": "CPU" },
                                                { "id": "ml_rl_fund_explore_ucb", "l": "Upper confidence bound", "hw": "CPU", "dev": "Peter Auer" },
                                                { "id": "ml_rl_fund_explore_ts", "l": "Thompson sampling", "hw": "CPU", "dev": "William R. Thompson" },
                                                { "id": "ml_rl_fund_explore_intrin", "l": "Intrinsic motivation (RND, ICM)", "hw": "GPU", "tool": "PyTorch, TensorFlow" }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "id": "ml_rl_modelfree",
                                    "l": "Model‑free Methods",
                                    "ch": [
                                        {
                                            "id": "ml_rl_modelfree_td",
                                            "l": "Temporal difference learning",
                                            "ch": [
                                                { "id": "ml_rl_modelfree_td_q", "l": "Q‑learning (off‑policy)", "hw": "CPU", "dev": "Chris Watkins" },
                                                { "id": "ml_rl_modelfree_td_sarsa", "l": "SARSA (on‑policy)", "hw": "CPU", "dev": "Rich Sutton" }
                                            ]
                                        },
                                        {
                                            "id": "ml_rl_modelfree_dqn",
                                            "l": "Deep Q‑Networks",
                                            "ch": [
                                                { "id": "ml_rl_modelfree_dqn_vanilla", "l": "DQN (experience replay, target network)", "hw": "GPU (NVIDIA GTX 1060+)", "tool": "Stable-Baselines3, RLlib", "dev": "DeepMind (Mnih et al.)" },
                                                { "id": "ml_rl_modelfree_dqn_double", "l": "Double DQN", "hw": "GPU", "dev": "Hado van Hasselt" },
                                                { "id": "ml_rl_modelfree_dqn_dueling", "l": "Dueling DQN", "hw": "GPU", "dev": "Ziyu Wang" },
                                                { "id": "ml_rl_modelfree_dqn_per", "l": "Prioritised experience replay", "hw": "GPU", "dev": "Tom Schaul" },
                                                { "id": "ml_rl_modelfree_dqn_rainbow", "l": "Rainbow DQN", "hw": "GPU (8GB VRAM)", "tool": "PyTorch, Dopamine", "dev": "Matteo Hessel" }
                                            ]
                                        },
                                        {
                                            "id": "ml_rl_modelfree_pg",
                                            "l": "Policy Gradient Methods",
                                            "ch": [
                                                { "id": "ml_rl_modelfree_pg_reinforce", "l": "REINFORCE (Monte Carlo)", "hw": "CPU/GPU", "dev": "Ronald Williams" },
                                                {
                                                    "id": "ml_rl_modelfree_pg_ac",
                                                    "l": "Actor‑critic",
                                                    "ch": [
                                                        { "id": "ml_rl_modelfree_pg_a2c", "l": "A2C (advantage)", "hw": "GPU", "tool": "Stable-Baselines3", "dev": "Volodymyr Mnih" },
                                                        { "id": "ml_rl_modelfree_pg_a3c", "l": "A3C (asynchronous)", "hw": "CPU/GPU (multi‑core)", "tool": "TensorFlow, PyTorch", "dev": "DeepMind" }
                                                    ]
                                                },
                                                { "id": "ml_rl_modelfree_pg_ppo", "l": "PPO (proximal policy optimisation)", "hw": "GPU", "tool": "Stable-Baselines3, RLlib", "dev": "OpenAI (Schulman et al.)" },
                                                { "id": "ml_rl_modelfree_pg_trpo", "l": "TRPO", "hw": "GPU", "dev": "John Schulman" },
                                                { "id": "ml_rl_modelfree_pg_sac", "l": "SAC (soft actor‑critic)", "hw": "GPU", "tool": "Stable-Baselines3, RLlib", "dev": "Tuomas Haarnoja" },
                                                { "id": "ml_rl_modelfree_pg_td3", "l": "TD3 (twin delayed DDPG)", "hw": "GPU", "dev": "Scott Fujimoto" }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "id": "ml_rl_modelbased",
                                    "l": "Model‑based RL",
                                    "ch": [
                                        { "id": "ml_rl_modelbased_dyna", "l": "Dyna", "hw": "CPU", "dev": "Rich Sutton" },
                                        { "id": "ml_rl_modelbased_world", "l": "World models (Ha & Schmidhuber)", "hw": "GPU (NVIDIA 1080 Ti+)", "tool": "PyTorch", "dev": "David Ha, Jürgen Schmidhuber" },
                                        { "id": "ml_rl_modelbased_muzero", "l": "MuZero / AlphaZero", "hw": "GPU cluster (TPU for AlphaZero)", "tool": "DeepMind OpenSpiel", "dev": "DeepMind" },
                                        { "id": "ml_rl_modelbased_dreamer", "l": "Dreamer (latent imagination)", "hw": "GPU (8GB VRAM)", "tool": "PyTorch, TensorFlow", "dev": "DeepMind (Danijar Hafner)" }
                                    ]
                                },
                                {
                                    "id": "ml_rl_marl",
                                    "l": "Multi‑Agent RL",
                                    "ch": [
                                        { "id": "ml_rl_marl_coop", "l": "Cooperative settings", "hw": "CPU/GPU", "tool": "PyMARL, EPyMARL" },
                                        { "id": "ml_rl_marl_comp", "l": "Competitive settings", "hw": "GPU", "tool": "OpenAI Gym (multiworld)" },
                                        { "id": "ml_rl_marl_maddpg", "l": "MADDPG", "hw": "GPU", "tool": "OpenAI MADDPG", "dev": "Ryan Lowe" },
                                        { "id": "ml_rl_marl_qmix", "l": "QMIX", "hw": "GPU", "tool": "PyMARL", "dev": "Tabish Rashid" },
                                        { "id": "ml_rl_marl_selfplay", "l": "Self‑play (AlphaStar, OpenAI Five)", "hw": "Large‑scale GPU/TPU cluster", "product": "AlphaStar, OpenAI Five", "dev": "DeepMind, OpenAI" }
                                    ]
                                },
                                {
                                    "id": "ml_rl_imitation",
                                    "l": "Imitation & Inverse RL",
                                    "ch": [
                                        { "id": "ml_rl_imitation_bc", "l": "Behavioural cloning", "hw": "CPU/GPU", "tool": "imitation library (RLlib)", "dev": "Dean Pomerleau" },
                                        { "id": "ml_rl_imitation_irl", "l": "Inverse RL (Ng & Russell)", "hw": "CPU", "tool": "irl library", "dev": "Andrew Ng, Stuart Russell" },
                                        { "id": "ml_rl_imitation_gail", "l": "GAIL (generative adversarial)", "hw": "GPU", "tool": "imitation library", "dev": "Jonathan Ho" },
                                        { "id": "ml_rl_imitation_dagger", "l": "DAgger", "hw": "CPU/GPU", "dev": "Stéphane Ross" }
                                    ]
                                }
                            ]
                        },
                        {
                            "id": "ml_dl",
                            "c": "dl",
                            "l": "Deep Learning",
                            "ch": [
                                {
                                    "id": "ml_dl_found",
                                    "l": "Neural Network Foundations",
                                    "ch": [
                                        { "id": "ml_dl_found_neurons", "l": "Artificial neuron (McCulloch–Pitts)", "hw": "CPU", "tool": "NumPy, PyTorch", "dev": "Warren McCulloch, Walter Pitts" },
                                        {
                                            "id": "ml_dl_found_mlp",
                                            "l": "Multi‑layer perceptron",
                                            "ch": [
                                                { "id": "ml_dl_found_mlp_fwd", "l": "Forward pass", "hw": "CPU/GPU" },
                                                { "id": "ml_dl_found_mlp_bwd", "l": "Backpropagation (chain rule)", "hw": "CPU/GPU", "dev": "Rumelhart, Hinton, Williams" },
                                                { "id": "ml_dl_found_mlp_uat", "l": "Universal approximation theorem", "dev": "George Cybenko, Kurt Hornik" }
                                            ]
                                        },
                                        {
                                            "id": "ml_dl_found_activ",
                                            "l": "Activation functions",
                                            "ch": [
                                                { "id": "ml_dl_found_activ_sigmoid", "l": "Sigmoid, tanh", "hw": "CPU/GPU", "tool": "PyTorch (torch.sigmoid), TensorFlow (tf.nn.sigmoid)" },
                                                { "id": "ml_dl_found_activ_relu", "l": "ReLU, Leaky ReLU, PReLU", "tool": "PyTorch (torch.relu), TensorFlow (tf.nn.relu)" },
                                                { "id": "ml_dl_found_activ_elu", "l": "ELU, SELU" },
                                                { "id": "ml_dl_found_activ_gelu", "l": "GELU", "dev": "Dan Hendrycks" },
                                                { "id": "ml_dl_found_activ_swish", "l": "Swish, Mish", "dev": "Prajit Ramachandran (Swish), Diganta Misra (Mish)" },
                                                { "id": "ml_dl_found_activ_softmax", "l": "Softmax (output layer)" }
                                            ]
                                        },
                                        {
                                            "id": "ml_dl_found_init",
                                            "l": "Weight initialisation",
                                            "ch": [
                                                { "id": "ml_dl_found_init_xavier", "l": "Xavier / Glorot", "dev": "Xavier Glorot, Yoshua Bengio" },
                                                { "id": "ml_dl_found_init_he", "l": "He (Kaiming)", "dev": "Kaiming He" },
                                                { "id": "ml_dl_found_init_orth", "l": "Orthogonal" }
                                            ]
                                        },
                                        {
                                            "id": "ml_dl_found_opt",
                                            "l": "Optimisers",
                                            "ch": [
                                                { "id": "ml_dl_found_opt_sgd", "l": "SGD, momentum, Nesterov", "hw": "CPU/GPU", "tool": "PyTorch (torch.optim.SGD), TensorFlow (tf.keras.optimizers.SGD)" },
                                                { "id": "ml_dl_found_opt_adagrad", "l": "AdaGrad", "dev": "John Duchi" },
                                                { "id": "ml_dl_found_opt_rmsprop", "l": "RMSprop", "dev": "Geoffrey Hinton" },
                                                { "id": "ml_dl_found_opt_adam", "l": "Adam, AdamW, Adamax", "dev": "Diederik Kingma, Jimmy Ba" },
                                                { "id": "ml_dl_found_opt_nadam", "l": "Nadam", "dev": "Timothy Dozat" },
                                                { "id": "ml_dl_found_opt_lamb", "l": "LAMB, LARS", "dev": "Yang You (LAMB), Boris Ginsburg (LARS)" },
                                                { "id": "ml_dl_found_opt_lrsched", "l": "Learning rate schedules (cosine, warmup, step, cyclic)", "tool": "PyTorch (torch.optim.lr_scheduler)" }
                                            ]
                                        },
                                        {
                                            "id": "ml_dl_found_reg",
                                            "l": "Regularisation",
                                            "ch": [
                                                { "id": "ml_dl_found_reg_dropout", "l": "Dropout, Variational dropout", "dev": "Nitish Srivastava, Geoffrey Hinton" },
                                                { "id": "ml_dl_found_reg_bn", "l": "Batch normalisation", "dev": "Sergey Ioffe, Christian Szegedy" },
                                                { "id": "ml_dl_found_reg_ln", "l": "Layer normalisation", "dev": "Jimmy Lei Ba" },
                                                { "id": "ml_dl_found_reg_gn", "l": "Group norm, Instance norm", "dev": "Yuxin Wu (GroupNorm), Dmitry Ulyanov (InstanceNorm)" },
                                                { "id": "ml_dl_found_reg_wd", "l": "Weight decay (L1, L2)" },
                                                { "id": "ml_dl_found_reg_early", "l": "Early stopping" },
                                                { "id": "ml_dl_found_reg_aug", "l": "Data augmentation as regularisation" },
                                                { "id": "ml_dl_found_reg_label", "l": "Label smoothing", "dev": "Christian Szegedy" },
                                                { "id": "ml_dl_found_reg_mixup", "l": "Mixup, CutMix", "dev": "Hongyi Zhang (Mixup), Sangdoo Yun (CutMix)" }
                                            ]
                                        },
                                        {
                                            "id": "ml_dl_found_loss",
                                            "l": "Loss functions",
                                            "ch": [
                                                { "id": "ml_dl_found_loss_ce", "l": "Cross‑entropy (binary, categorical)", "hw": "CPU/GPU", "tool": "PyTorch (nn.CrossEntropyLoss), TensorFlow (CategoricalCrossentropy)" },
                                                { "id": "ml_dl_found_loss_mse", "l": "MSE, MAE, Huber", "tool": "PyTorch (nn.MSELoss, nn.L1Loss), TensorFlow (MSE, MAE)" },
                                                { "id": "ml_dl_found_loss_focal", "l": "Focal loss", "dev": "Tsung‑Yi Lin" },
                                                { "id": "ml_dl_found_loss_contrast", "l": "Contrastive loss, Triplet loss", "tool": "PyTorch Metric Learning", "dev": "Raia Hadsell (contrastive), Florian Schroff (triplet)" },
                                                { "id": "ml_dl_found_loss_infonce", "l": "InfoNCE", "dev": "Aaron van den Oord" },
                                                { "id": "ml_dl_found_loss_kl", "l": "KL divergence" },
                                                { "id": "ml_dl_found_loss_elbo", "l": "ELBO (VAE)" }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "id": "ml_dl_cnn",
                                    "l": "Convolutional Neural Networks",
                                    "ch": [
                                        {
                                            "id": "ml_dl_cnn_conv",
                                            "l": "Convolution operation",
                                            "ch": [
                                                { "id": "ml_dl_cnn_conv_kernel", "l": "Kernels, stride, padding", "hw": "GPU (recommended)", "tool": "PyTorch (nn.Conv2d), TensorFlow (Conv2D)" },
                                                { "id": "ml_dl_cnn_conv_depthwise", "l": "Depthwise separable convolution", "dev": "Andrew G. Howard (MobileNet)" },
                                                { "id": "ml_dl_cnn_conv_dilated", "l": "Dilated / atrous convolution", "dev": "Fisher Yu" },
                                                { "id": "ml_dl_cnn_conv_transpose", "l": "Transposed convolution (upsampling)" }
                                            ]
                                        },
                                        {
                                            "id": "ml_dl_cnn_pool",
                                            "l": "Pooling",
                                            "ch": [
                                                { "id": "ml_dl_cnn_pool_max", "l": "Max pooling" },
                                                { "id": "ml_dl_cnn_pool_avg", "l": "Average pooling" },
                                                { "id": "ml_dl_cnn_pool_global", "l": "Global pooling" }
                                            ]
                                        },
                                        {
                                            "id": "ml_dl_cnn_arch",
                                            "l": "Landmark architectures",
                                            "ch": [
                                                { "id": "ml_dl_cnn_arch_lenet", "l": "LeNet‑5", "hw": "CPU/GPU (small)", "tool": "PyTorch, TensorFlow", "dev": "Yann LeCun" },
                                                { "id": "ml_dl_cnn_arch_alexnet", "l": "AlexNet (2012)", "hw": "NVIDIA GTX 580 (original), now any GPU", "tool": "PyTorch (torchvision.models.alexnet)", "dev": "Alex Krizhevsky" },
                                                { "id": "ml_dl_cnn_arch_vgg", "l": "VGG (16, 19)", "hw": "GPU (4GB+ VRAM)", "tool": "torchvision.models.vgg16", "dev": "Karen Simonyan, Andrew Zisserman (Oxford VGG)" },
                                                { "id": "ml_dl_cnn_arch_inception", "l": "Inception (GoogLeNet)", "hw": "GPU", "tool": "torchvision.models.googlenet", "dev": "Google (Szegedy et al.)" },
                                                { "id": "ml_dl_cnn_arch_resnet", "l": "ResNet (residual connections)", "hw": "GPU (6GB+ VRAM)", "tool": "torchvision.models.resnet50", "dev": "Microsoft Research (Kaiming He)" },
                                                { "id": "ml_dl_cnn_arch_densenet", "l": "DenseNet", "hw": "GPU (8GB+ VRAM)", "tool": "torchvision.models.densenet121", "dev": "Gao Huang" },
                                                { "id": "ml_dl_cnn_arch_efficientnet", "l": "EfficientNet (compound scaling)", "hw": "GPU (8GB+ VRAM)", "tool": "timm (PyTorch Image Models)", "dev": "Google (Mingxing Tan)" },
                                                { "id": "ml_dl_cnn_arch_mobilenet", "l": "MobileNet (depthwise)", "hw": "CPU, Edge TPU, GPU", "tool": "torchvision.models.mobilenet_v2", "dev": "Google (Andrew Howard)" },
                                                { "id": "ml_dl_cnn_arch_convnext", "l": "ConvNeXt", "hw": "GPU (8GB+ VRAM)", "tool": "timm", "dev": "Facebook AI (Zhuang Liu)" }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "id": "ml_dl_rnn",
                                    "l": "Recurrent Architectures",
                                    "ch": [
                                        { "id": "ml_dl_rnn_vanilla", "l": "Vanilla RNN (vanishing gradient)", "hw": "CPU/GPU", "tool": "PyTorch (nn.RNN), TensorFlow (SimpleRNN)", "dev": "David Rumelhart" },
                                        {
                                            "id": "ml_dl_rnn_lstm",
                                            "l": "LSTM",
                                            "ch": [
                                                { "id": "ml_dl_rnn_lstm_cell", "l": "Cell state, hidden state" },
                                                { "id": "ml_dl_rnn_lstm_gates", "l": "Forget, input, output gates" },
                                                { "id": "ml_dl_rnn_lstm_peephole", "l": "Peephole connections" }
                                            ],
                                            "dev": "Sepp Hochreiter, Jürgen Schmidhuber"
                                        },
                                        { "id": "ml_dl_rnn_gru", "l": "GRU (gated recurrent unit)", "dev": "Kyunghyun Cho" },
                                        { "id": "ml_dl_rnn_bidirectional", "l": "Bidirectional RNNs", "tool": "PyTorch (bidirectional=True)" },
                                        { "id": "ml_dl_rnn_seq2seq", "l": "Sequence‑to‑sequence models", "dev": "Ilya Sutskever" },
                                        { "id": "ml_dl_rnn_ctc", "l": "Connectionist temporal classification (CTC)", "dev": "Alex Graves" }
                                    ]
                                },
                                {
                                    "id": "ml_dl_attn",
                                    "l": "Attention & Transformers",
                                    "ch": [
                                        { "id": "ml_dl_attn_bahdanau", "l": "Attention mechanism (Bahdanau 2015)", "dev": "Dzmitry Bahdanau" },
                                        {
                                            "id": "ml_dl_attn_self",
                                            "l": "Self‑attention",
                                            "ch": [
                                                { "id": "ml_dl_attn_self_qkv", "l": "Query, Key, Value (QKV)" },
                                                { "id": "ml_dl_attn_self_scaled", "l": "Scaled dot‑product attention" },
                                                { "id": "ml_dl_attn_self_softmax", "l": "Attention scores" }
                                            ]
                                        },
                                        { "id": "ml_dl_attn_mha", "l": "Multi‑head attention", "hw": "GPU (8GB+ VRAM)", "tool": "PyTorch (nn.MultiheadAttention), TensorFlow (MultiHeadAttention)" },
                                        {
                                            "id": "ml_dl_attn_pos",
                                            "l": "Positional encoding",
                                            "ch": [
                                                { "id": "ml_dl_attn_pos_sinusoid", "l": "Sinusoidal" },
                                                { "id": "ml_dl_attn_pos_learned", "l": "Learned embeddings" },
                                                { "id": "ml_dl_attn_pos_rope", "l": "Rotary (RoPE)", "dev": "Jianlin Su" },
                                                { "id": "ml_dl_attn_pos_alibi", "l": "ALiBi", "dev": "Ofir Press" }
                                            ]
                                        },
                                        {
                                            "id": "ml_dl_attn_block",
                                            "l": "Transformer block",
                                            "ch": [
                                                { "id": "ml_dl_attn_block_ffn", "l": "Feed‑forward sublayer" },
                                                { "id": "ml_dl_attn_block_norm", "l": "Layer norm (pre‑/post‑norm)" },
                                                { "id": "ml_dl_attn_block_res", "l": "Residual connections" },
                                                { "id": "ml_dl_attn_block_drop", "l": "Dropout" }
                                            ]
                                        },
                                        {
                                            "id": "ml_dl_attn_efficient",
                                            "l": "Efficient attention",
                                            "ch": [
                                                { "id": "ml_dl_attn_efficient_sparse", "l": "Sparse (Longformer, BigBird)", "dev": "Iz Beltagy (Longformer), Manzil Zaheer (BigBird)" },
                                                { "id": "ml_dl_attn_efficient_linear", "l": "Linear (Performer)", "dev": "Krzysztof Choromanski" },
                                                { "id": "ml_dl_attn_efficient_flash", "l": "FlashAttention (IO‑aware)", "dev": "Tri Dao (Stanford)" },
                                                { "id": "ml_dl_attn_efficient_sliding", "l": "Sliding window" },
                                                { "id": "ml_dl_attn_efficient_gqa", "l": "Grouped‑query attention (GQA)" }
                                            ]
                                        },
                                        {
                                            "id": "ml_dl_attn_variants",
                                            "l": "Transformer model types",
                                            "ch": [
                                                { "id": "ml_dl_attn_variants_enc", "l": "Encoder‑only (BERT, RoBERTa)", "hw": "GPU (8GB+ VRAM)", "tool": "Hugging Face Transformers", "dev": "Google (BERT), Facebook (RoBERTa)" },
                                                { "id": "ml_dl_attn_variants_dec", "l": "Decoder‑only (GPT, LLaMA)", "hw": "GPU (8GB+ VRAM, 16GB+ for inference)", "tool": "Hugging Face, vLLM", "dev": "OpenAI (GPT), Meta (LLaMA)" },
                                                { "id": "ml_dl_attn_variants_encdec", "l": "Encoder‑decoder (T5, BART)", "hw": "GPU (8GB+ VRAM)", "dev": "Google (T5), Facebook (BART)" },
                                                { "id": "ml_dl_attn_variants_vit", "l": "Vision transformers (ViT, Swin)", "hw": "GPU (8GB+ VRAM)", "dev": "Google (ViT), Microsoft (Swin)" }
                                            ]
                                        },
                                        { "id": "ml_dl_attn_scaling", "l": "Scaling laws (Chinchilla, emergent abilities)", "dev": "DeepMind (Chinchilla), OpenAI" },
                                        {
                                            "id": "ml_dl_attn_moe",
                                            "l": "Mixture of Experts (MoE)",
                                            "ch": [
                                                { "id": "ml_dl_attn_moe_sparse", "l": "Sparse gating", "dev": "Noam Shazeer" },
                                                { "id": "ml_dl_attn_moe_switch", "l": "Switch Transformer", "dev": "Google (William Fedus)" },
                                                { "id": "ml_dl_attn_moe_balance", "l": "Expert load balancing" }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "id": "ml_dl_gen",
                                    "l": "Generative Deep Learning",
                                    "ch": [
                                        {
                                            "id": "ml_dl_gen_ae",
                                            "l": "Autoencoders",
                                            "ch": [
                                                { "id": "ml_dl_gen_ae_vanilla", "l": "Vanilla AE", "hw": "GPU", "tool": "PyTorch, TensorFlow" },
                                                { "id": "ml_dl_gen_ae_denoising", "l": "Denoising AE", "dev": "Pascal Vincent" },
                                                { "id": "ml_dl_gen_ae_sparse", "l": "Sparse AE" },
                                                { "id": "ml_dl_gen_ae_contractive", "l": "Contractive AE", "dev": "Salah Rifai" }
                                            ]
                                        },
                                        {
                                            "id": "ml_dl_gen_vae",
                                            "l": "Variational autoencoders",
                                            "ch": [
                                                { "id": "ml_dl_gen_vae_reparam", "l": "Reparameterisation trick", "dev": "Diederik Kingma" },
                                                { "id": "ml_dl_gen_vae_elbo", "l": "ELBO objective" },
                                                { "id": "ml_dl_gen_vae_beta", "l": "β‑VAE (disentangled)", "dev": "Irina Higgins" },
                                                { "id": "ml_dl_gen_vae_vq", "l": "VQ‑VAE (vector quantised)", "dev": "Aaron van den Oord" }
                                            ]
                                        },
                                        {
                                            "id": "ml_dl_gen_gan",
                                            "l": "Generative adversarial networks",
                                            "ch": [
                                                { "id": "ml_dl_gen_gan_basic", "l": "Generator & discriminator", "hw": "GPU (6GB+ VRAM)", "tool": "PyTorch, TensorFlow", "dev": "Ian Goodfellow" },
                                                { "id": "ml_dl_gen_gan_mode", "l": "Mode collapse, training instability" },
                                                { "id": "ml_dl_gen_gan_dcgan", "l": "DCGAN", "dev": "Alec Radford" },
                                                { "id": "ml_dl_gen_gan_wgan", "l": "WGAN, WGAN‑GP", "dev": "Martin Arjovsky (WGAN), Ishaan Gulrajani (WGAN‑GP)" },
                                                { "id": "ml_dl_gen_gan_style", "l": "StyleGAN (1,2,3)", "hw": "GPU (8GB+ VRAM, 24GB for StyleGAN3)", "tool": "StyleGAN2‑ADA (NVIDIA)", "dev": "NVIDIA (Tero Karras)" },
                                                { "id": "ml_dl_gen_gan_prog", "l": "Progressive GAN", "dev": "Tero Karras" },
                                                { "id": "ml_dl_gen_gan_cycle", "l": "CycleGAN (unpaired)", "dev": "Jun‑Yan Zhu" },
                                                { "id": "ml_dl_gen_gan_pix2pix", "l": "Pix2Pix (paired)", "dev": "Phillip Isola" },
                                                { "id": "ml_dl_gen_gan_cond", "l": "Conditional GAN (cGAN)", "dev": "Mehdi Mirza" }
                                            ]
                                        },
                                        {
                                            "id": "ml_dl_gen_diff",
                                            "l": "Diffusion models",
                                            "ch": [
                                                { "id": "ml_dl_gen_diff_forward", "l": "Forward diffusion (noising)" },
                                                { "id": "ml_dl_gen_diff_reverse", "l": "Reverse denoising process" },
                                                { "id": "ml_dl_gen_diff_ddpm", "l": "DDPM", "hw": "GPU (8GB+ VRAM)", "tool": "Hugging Face Diffusers", "dev": "Google (Jonathan Ho)" },
                                                { "id": "ml_dl_gen_diff_ddim", "l": "DDIM (deterministic)", "dev": "Jiaming Song" },
                                                { "id": "ml_dl_gen_diff_score", "l": "Score‑based (SDE)", "dev": "Yang Song" },
                                                { "id": "ml_dl_gen_diff_cfg", "l": "Classifier‑free guidance", "dev": "Jonathan Ho" },
                                                { "id": "ml_dl_gen_diff_latent", "l": "Latent diffusion (Stable Diffusion)", "hw": "GPU (12GB+ VRAM)", "product": "Stable Diffusion (Stability AI)", "tool": "Diffusers, ComfyUI", "dev": "Robin Rombach" },
                                                { "id": "ml_dl_gen_diff_consistency", "l": "Consistency models", "dev": "Yang Song" },
                                                { "id": "ml_dl_gen_diff_flow", "l": "Flow matching", "dev": "Yaron Lipman" }
                                            ]
                                        },
                                        {
                                            "id": "ml_dl_gen_flow",
                                            "l": "Normalising flows",
                                            "ch": [
                                                { "id": "ml_dl_gen_flow_change", "l": "Change of variables" },
                                                { "id": "ml_dl_gen_flow_realnvp", "l": "RealNVP, Glow", "dev": "Laurent Dinh (RealNVP), Diederik Kingma (Glow)" },
                                                { "id": "ml_dl_gen_flow_spline", "l": "Neural spline flows", "dev": "Conor Durkan" }
                                            ]
                                        },
                                        { "id": "ml_dl_gen_ebm", "l": "Energy‑based models (EBM)", "dev": "Yann LeCun" },
                                        { "id": "ml_dl_gen_nerf", "l": "Neural radiance fields (NeRF)", "hw": "GPU (8GB+ VRAM)", "tool": "Nerfstudio", "dev": "Ben Mildenhall" }
                                    ]
                                },
                                {
                                    "id": "ml_dl_gnn",
                                    "l": "Graph Neural Networks",
                                    "ch": [
                                        { "id": "ml_dl_gnn_repr", "l": "Graph representation (nodes, edges, features)", "hw": "CPU/GPU", "tool": "PyTorch Geometric, DGL" },
                                        { "id": "ml_dl_gnn_message", "l": "Message passing framework", "dev": "Justin Gilmer" },
                                        { "id": "ml_dl_gnn_gcn", "l": "GCN (graph convolutional network)", "hw": "GPU (6GB+ VRAM)", "tool": "PyTorch Geometric (GCNConv)", "dev": "Thomas Kipf" },
                                        { "id": "ml_dl_gnn_gat", "l": "GAT (graph attention network)", "tool": "PyTorch Geometric (GATConv)", "dev": "Petar Veličković" },
                                        { "id": "ml_dl_gnn_graphsage", "l": "GraphSAGE (inductive)", "dev": "Will Hamilton (Stanford)" },
                                        { "id": "ml_dl_gnn_gin", "l": "GIN (graph isomorphism network)", "dev": "Keyulu Xu" },
                                        { "id": "ml_dl_gnn_hetero", "l": "Heterogeneous GNNs", "tool": "PyTorch Geometric (HeteroData)" },
                                        { "id": "ml_dl_gnn_temporal", "l": "Temporal & dynamic GNNs", "tool": "PyTorch Geometric Temporal" },
                                        { "id": "ml_dl_gnn_equiv", "l": "Equivariant GNNs (SE(3), E(3))", "dev": "Johannes Klicpera (SE(3)-Transformer)" },
                                        {
                                            "id": "ml_dl_gnn_app",
                                            "l": "Applications",
                                            "ch": [
                                                { "id": "ml_dl_gnn_app_mol", "l": "Molecular property prediction", "tool": "RDKit, PyTorch Geometric" },
                                                { "id": "ml_dl_gnn_app_social", "l": "Social network analysis" },
                                                { "id": "ml_dl_gnn_app_kg", "l": "Knowledge graph completion", "tool": "PyTorch Geometric (RGCN)" }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "id": "ml_dl_spec",
                                    "l": "Specialised Architectures",
                                    "ch": [
                                        { "id": "ml_dl_spec_capsule", "l": "Capsule networks (Hinton)", "hw": "GPU", "tool": "PyTorch (capsule‑network)", "dev": "Geoffrey Hinton" },
                                        { "id": "ml_dl_spec_node", "l": "Neural ODEs (continuous depth)", "hw": "GPU", "tool": "torchdiffeq", "dev": "Ricky T. Q. Chen" },
                                        { "id": "ml_dl_spec_hyper", "l": "Hypernetworks", "hw": "GPU", "dev": "David Ha" },
                                        { "id": "ml_dl_spec_snn", "l": "Spiking neural networks (SNN)", "hw": "CPU/GPU", "tool": "Nengo, SpykeTorch", "dev": "Wolfgang Maass" },
                                        { "id": "ml_dl_spec_reservoir", "l": "Reservoir computing (ESN)", "hw": "CPU", "tool": "reservoirpy", "dev": "Herbert Jaeger" },
                                        { "id": "ml_dl_spec_kan", "l": "Kolmogorov–Arnold Networks (KAN)", "hw": "CPU/GPU", "dev": "Ziming Liu" },
                                        { "id": "ml_dl_spec_ssm", "l": "State space models (Mamba, S4)", "hw": "GPU (6GB+ VRAM)", "tool": "Mamba (Albert Gu)", "dev": "Albert Gu, Tri Dao" },
                                        { "id": "ml_dl_spec_liquid", "l": "Liquid neural networks", "hw": "CPU/GPU", "dev": "MIT (Ramin Hasani)" }
                                    ]
                                },
                                {
                                    "id": "ml_dl_agents",
                                    "c": "ag",
                                    "l": "AI Agents & Agentic Systems",
                                    "ch": [
                                        { "id": "ml_dl_agents_fund", "l": "Agent fundamentals (PEAS, BDI, sense‑plan‑act)", "hw": "CPU/GPU", "tool": "LangChain, AutoGen", "dev": "Stuart Russell, Peter Norvig" },
                                        {
                                            "id": "ml_dl_agents_llm",
                                            "l": "LLM‑based agents",
                                            "ch": [
                                                { "id": "ml_dl_agents_llm_memory", "l": "Memory systems (working, episodic, semantic, procedural)", "tool": "LangChain (memory modules), LlamaIndex" },
                                                { "id": "ml_dl_agents_llm_tools", "l": "Tool use & function calling (web search, code interpreter, API)", "tool": "LangChain (Tools), OpenAI function calling" },
                                                {
                                                    "id": "ml_dl_agents_llm_reason",
                                                    "l": "Reasoning architectures",
                                                    "ch": [
                                                        { "id": "ml_dl_agents_llm_reason_cot", "l": "Chain‑of‑thought", "dev": "Jason Wei (Google)" },
                                                        { "id": "ml_dl_agents_llm_reason_react", "l": "ReAct", "dev": "Shunyu Yao" },
                                                        { "id": "ml_dl_agents_llm_reason_tot", "l": "Tree‑of‑thoughts", "dev": "Shunyu Yao (Princeton)" },
                                                        { "id": "ml_dl_agents_llm_reason_got", "l": "Graph‑of‑thoughts", "dev": "Maciej Besta" },
                                                        { "id": "ml_dl_agents_llm_reason_selfref", "l": "Self‑reflection, self‑critique" }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "id": "ml_dl_agents_multi",
                                            "l": "Multi‑agent systems",
                                            "ch": [
                                                { "id": "ml_dl_agents_multi_comm", "l": "Communication protocols" },
                                                { "id": "ml_dl_agents_multi_frameworks", "l": "Frameworks (AutoGen, CrewAI, LangGraph, MetaGPT, Camel, OpenAI Swarm)", "product": "AutoGen (Microsoft), CrewAI", "dev": "Microsoft (AutoGen), OpenAI (Swarm)" }
                                            ]
                                        },
                                        {
                                            "id": "ml_dl_agents_orch",
                                            "l": "Orchestration & infrastructure",
                                            "ch": [
                                                { "id": "ml_dl_agents_orch_langchain", "l": "LangChain", "product": "LangChain (Harrison Chase)", "dev": "Harrison Chase" },
                                                { "id": "ml_dl_agents_orch_llamaindex", "l": "LlamaIndex", "dev": "Jerry Liu" },
                                                { "id": "ml_dl_agents_orch_mcp", "l": "Model Context Protocol (MCP)", "dev": "Anthropic" }
                                            ]
                                        },
                                        {
                                            "id": "ml_dl_agents_apps",
                                            "l": "Agentic applications",
                                            "ch": [
                                                { "id": "ml_dl_agents_apps_sweng", "l": "Software engineering (Devin, Claude Code, SWE‑agent)", "product": "Devin (Cognition), Claude Code (Anthropic)", "dev": "Cognition AI, Anthropic" },
                                                { "id": "ml_dl_agents_apps_research", "l": "Research & data analysis" },
                                                { "id": "ml_dl_agents_apps_personal", "l": "Personal assistants" }
                                            ]
                                        },
                                        {
                                            "id": "ml_dl_agents_safety",
                                            "l": "Agent safety & alignment",
                                            "ch": [
                                                { "id": "ml_dl_agents_safety_corr", "l": "Corrigibility, human oversight" },
                                                { "id": "ml_dl_agents_safety_prompt", "l": "Prompt injection, jailbreak risks" }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "id": "ml_adv",
                            "l": "Advanced Learning Paradigms",
                            "ch": [
                                {
                                    "id": "ml_adv_semi",
                                    "l": "Semi‑supervised Learning",
                                    "ch": [
                                        { "id": "ml_adv_semi_self", "l": "Self‑training & pseudo‑labelling", "hw": "CPU/GPU", "tool": "scikit‑learn, PyTorch" },
                                        { "id": "ml_adv_semi_labelprop", "l": "Label propagation & spreading", "hw": "CPU", "tool": "scikit-learn (LabelPropagation)" },
                                        { "id": "ml_adv_semi_cotrain", "l": "Co‑training (multi‑view)", "hw": "CPU", "dev": "Avrim Blum" },
                                        {
                                            "id": "ml_adv_semi_consist",
                                            "l": "Consistency regularisation",
                                            "ch": [
                                                { "id": "ml_adv_semi_consist_mm", "l": "MixMatch", "hw": "GPU", "dev": "Google (Berthelot et al.)" },
                                                { "id": "ml_adv_semi_consist_fm", "l": "FixMatch", "dev": "Google (Sohn et al.)" },
                                                { "id": "ml_adv_semi_consist_uda", "l": "UDA (unsupervised data augmentation)", "dev": "Google (Xie et al.)" }
                                            ]
                                        },
                                        { "id": "ml_adv_semi_graph", "l": "Graph‑based semi‑supervised learning", "hw": "CPU", "tool": "scikit-learn (LabelSpreading)" }
                                    ]
                                },
                                {
                                    "id": "ml_adv_selfsup",
                                    "l": "Self‑supervised Learning",
                                    "ch": [
                                        {
                                            "id": "ml_adv_selfsup_contrast",
                                            "l": "Contrastive learning",
                                            "ch": [
                                                { "id": "ml_adv_selfsup_contrast_simclr", "l": "SimCLR (NT‑Xent loss)", "hw": "GPU (8GB+ VRAM)", "tool": "PyTorch (SimCLR)", "dev": "Google (Ting Chen)" },
                                                { "id": "ml_adv_selfsup_contrast_moco", "l": "MoCo (momentum encoder)", "hw": "GPU (8GB+ VRAM)", "dev": "Facebook AI (Kaiming He)" },
                                                { "id": "ml_adv_selfsup_contrast_clip", "l": "CLIP (vision‑language contrast)", "hw": "GPU (12GB+ VRAM)", "product": "CLIP (OpenAI)", "dev": "OpenAI (Alec Radford)" }
                                            ]
                                        },
                                        {
                                            "id": "ml_adv_selfsup_mask",
                                            "l": "Masked autoencoding",
                                            "ch": [
                                                { "id": "ml_adv_selfsup_mask_mae", "l": "MAE (Masked Autoencoder)", "hw": "GPU (8GB+ VRAM)", "dev": "Facebook AI (Kaiming He)" },
                                                { "id": "ml_adv_selfsup_mask_bert", "l": "BERT (masked language modelling)", "hw": "GPU (8GB+ VRAM)", "dev": "Google (Jacob Devlin)" }
                                            ]
                                        },
                                        {
                                            "id": "ml_adv_selfsup_pred",
                                            "l": "Predictive coding",
                                            "ch": [
                                                { "id": "ml_adv_selfsup_pred_next", "l": "Next token / frame prediction" },
                                                { "id": "ml_adv_selfsup_pred_rot", "l": "Rotation / jigsaw prediction" }
                                            ]
                                        },
                                        {
                                            "id": "ml_adv_selfsup_noncontrast",
                                            "l": "Non‑contrastive methods",
                                            "ch": [
                                                { "id": "ml_adv_selfsup_noncontrast_byol", "l": "BYOL (bootstrap your own latent)", "hw": "GPU (8GB+ VRAM)", "dev": "DeepMind (Jean‑Bastien Grill)" },
                                                { "id": "ml_adv_selfsup_noncontrast_simsiam", "l": "SimSiam", "dev": "Facebook AI (Xinlei Chen)" }
                                            ]
                                        },
                                        { "id": "ml_adv_selfsup_distill", "l": "Self‑distillation (DINO)", "hw": "GPU (8GB+ VRAM)", "dev": "Facebook AI (Mathilde Caron)" }
                                    ]
                                },
                                {
                                    "id": "ml_adv_transfer",
                                    "l": "Transfer Learning",
                                    "ch": [
                                        {
                                            "id": "ml_adv_transfer_domain",
                                            "l": "Domain adaptation",
                                            "ch": [
                                                { "id": "ml_adv_transfer_domain_sup", "l": "Supervised DA", "hw": "CPU/GPU" },
                                                { "id": "ml_adv_transfer_domain_unsup", "l": "Unsupervised DA", "hw": "GPU" },
                                                { "id": "ml_adv_transfer_domain_adv", "l": "Adversarial domain adaptation (GAN‑based)", "dev": "Yaroslav Ganin" }
                                            ]
                                        },
                                        { "id": "ml_adv_transfer_gen", "l": "Domain generalisation", "hw": "CPU/GPU" },
                                        {
                                            "id": "ml_adv_transfer_finetune",
                                            "l": "Fine‑tuning strategies",
                                            "ch": [
                                                { "id": "ml_adv_transfer_finetune_full", "l": "Full fine‑tuning", "hw": "GPU" },
                                                { "id": "ml_adv_transfer_finetune_linear", "l": "Linear probing" },
                                                { "id": "ml_adv_transfer_finetune_partial", "l": "Partial (last k layers)" }
                                            ]
                                        },
                                        {
                                            "id": "ml_adv_transfer_shot",
                                            "l": "Zero‑shot & few‑shot transfer",
                                            "ch": [
                                                { "id": "ml_adv_transfer_shot_zero", "l": "Zero‑shot learning", "hw": "GPU", "tool": "CLIP, GPT" },
                                                { "id": "ml_adv_transfer_shot_few", "l": "Few‑shot learning", "hw": "GPU", "tool": "SetFit, MAML" }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "id": "ml_adv_meta",
                                    "l": "Meta‑learning",
                                    "ch": [
                                        {
                                            "id": "ml_adv_meta_maml",
                                            "l": "MAML (model‑agnostic meta‑learning)",
                                            "ch": [
                                                { "id": "ml_adv_meta_maml_fomaml", "l": "FOMAML (first‑order)" },
                                                { "id": "ml_adv_meta_maml_reptile", "l": "Reptile", "dev": "Alex Nichol (OpenAI)" }
                                            ],
                                            "dev": "Chelsea Finn (UC Berkeley)"
                                        },
                                        {
                                            "id": "ml_adv_meta_metric",
                                            "l": "Metric‑based meta‑learning",
                                            "ch": [
                                                { "id": "ml_adv_meta_metric_proto", "l": "Prototypical networks", "dev": "Jake Snell" },
                                                { "id": "ml_adv_meta_metric_matching", "l": "Matching networks", "dev": "Oriol Vinyals" },
                                                { "id": "ml_adv_meta_metric_relation", "l": "Relation networks", "dev": "Flood Sung" }
                                            ]
                                        },
                                        {
                                            "id": "ml_adv_meta_optim",
                                            "l": "Optimisation‑based",
                                            "ch": [
                                                { "id": "ml_adv_meta_optim_lstm", "l": "LSTM meta‑learner", "dev": "Sachin Ravi" },
                                                { "id": "ml_adv_meta_optim_hyper", "l": "Hypernetwork meta‑learning", "dev": "David Ha" }
                                            ]
                                        },
                                        { "id": "ml_adv_meta_icl", "l": "In‑context learning as meta‑learning", "dev": "OpenAI, Google" }
                                    ]
                                },
                                {
                                    "id": "ml_adv_active",
                                    "l": "Active Learning",
                                    "ch": [
                                        { "id": "ml_adv_active_unc", "l": "Uncertainty sampling (least confidence, margin, entropy)", "hw": "CPU", "tool": "modAL, scikit-learn" },
                                        { "id": "ml_adv_active_qbc", "l": "Query by committee (vote entropy, KL divergence)", "hw": "CPU", "dev": "Yoram Singer" },
                                        { "id": "ml_adv_active_emc", "l": "Expected model change / expected gradient length" },
                                        { "id": "ml_adv_active_batch", "l": "Batch active learning (diversity‑aware)" },
                                        { "id": "ml_adv_active_pool", "l": "Pool‑based vs stream‑based active learning" }
                                    ]
                                },
                                {
                                    "id": "ml_adv_continual",
                                    "l": "Continual & Online Learning",
                                    "ch": [
                                        { "id": "ml_adv_continual_cat", "l": "Catastrophic forgetting", "dev": "Michael McCloskey, Neal Cohen" },
                                        {
                                            "id": "ml_adv_continual_replay",
                                            "l": "Replay methods",
                                            "ch": [
                                                { "id": "ml_adv_continual_replay_er", "l": "Experience replay (ER)", "dev": "Lin (1992)" },
                                                { "id": "ml_adv_continual_replay_gem", "l": "GEM (gradient episodic memory)", "dev": "David Lopez‑Paz" },
                                                { "id": "ml_adv_continual_replay_agem", "l": "A‑GEM" }
                                            ]
                                        },
                                        {
                                            "id": "ml_adv_continual_reg",
                                            "l": "Regularisation‑based",
                                            "ch": [
                                                { "id": "ml_adv_continual_reg_ewc", "l": "Elastic weight consolidation (EWC)", "dev": "James Kirkpatrick (DeepMind)" },
                                                { "id": "ml_adv_continual_reg_si", "l": "Synaptic intelligence (SI)", "dev": "Friedemann Zenke" },
                                                { "id": "ml_adv_continual_reg_mas", "l": "Memory aware synapses (MAS)", "dev": "Rahaf Aljundi" }
                                            ]
                                        },
                                        {
                                            "id": "ml_adv_continual_dyn",
                                            "l": "Dynamic architecture",
                                            "ch": [
                                                { "id": "ml_adv_continual_dyn_pnn", "l": "Progressive neural networks", "dev": "Andrei A. Rusu (DeepMind)" },
                                                { "id": "ml_adv_continual_dyn_dn", "l": "Dynamic networks (adaptively expand)" }
                                            ]
                                        },
                                        { "id": "ml_adv_continual_online", "l": "Online learning (SGD, follow‑the‑leader)", "tool": "river (online ML library)" }
                                    ]
                                },
                                {
                                    "id": "ml_adv_fed",
                                    "l": "Federated Learning",
                                    "ch": [
                                        { "id": "ml_adv_fed_avg", "l": "FedAvg (Federated Averaging)", "hw": "CPU/GPU (distributed)", "tool": "TensorFlow Federated, PySyft", "dev": "Brendan McMahan (Google)" },
                                        {
                                            "id": "ml_adv_fed_variants",
                                            "l": "Variants & improvements",
                                            "ch": [
                                                { "id": "ml_adv_fed_variants_fedprox", "l": "FedProx (proximal term)", "dev": "Anit Sahu" },
                                                { "id": "ml_adv_fed_variants_scaffold", "l": "SCAFFOLD (control variates)", "dev": "Sai Praneeth Karimireddy" },
                                                { "id": "ml_adv_fed_variants_fedopt", "l": "FedOpt (optimiser‑based)" }
                                            ]
                                        },
                                        { "id": "ml_adv_fed_dp", "l": "Differential privacy in federated learning", "tool": "TensorFlow Privacy" },
                                        { "id": "ml_adv_fed_comm", "l": "Communication efficiency (quantisation, sparsification)" },
                                        { "id": "ml_adv_fed_hetero", "l": "Non‑IID data & client heterogeneity" },
                                        { "id": "ml_adv_fed_secure", "l": "Secure aggregation (MPC, homomorphic encryption)", "tool": "PySyft, OpenMined" }
                                    ]
                                },
                                {
                                    "id": "ml_adv_multitask",
                                    "l": "Multi‑task Learning",
                                    "ch": [
                                        { "id": "ml_adv_multitask_hard", "l": "Hard parameter sharing", "hw": "GPU", "tool": "PyTorch, TensorFlow" },
                                        { "id": "ml_adv_multitask_soft", "l": "Soft parameter sharing (regularisation, cross‑stitch)", "dev": "Ishan Misra (cross‑stitch)" },
                                        {
                                            "id": "ml_adv_multitask_grad",
                                            "l": "Gradient balancing",
                                            "ch": [
                                                { "id": "ml_adv_multitask_grad_mgda", "l": "MGDA (multi‑gradient descent algorithm)", "dev": "Ozan Sener" },
                                                { "id": "ml_adv_multitask_grad_pcgrad", "l": "PCGrad (projecting conflicting gradients)", "dev": "Tianhe Yu" },
                                                { "id": "ml_adv_multitask_grad_gradnorm", "l": "GradNorm", "dev": "Zhao Chen" }
                                            ]
                                        },
                                        { "id": "ml_adv_multitask_taskweight", "l": "Task weighting (uncertainty weighting, dynamic weight average)", "dev": "Alex Kendall (uncertainty weighting)" }
                                    ]
                                },
                                {
                                    "id": "ml_adv_curriculum",
                                    "l": "Curriculum Learning",
                                    "ch": [
                                        { "id": "ml_adv_curriculum_basic", "l": "Easy → hard example ordering", "dev": "Yoshua Bengio" },
                                        { "id": "ml_adv_curriculum_pacing", "l": "Pacing functions (linear, exponential, self‑paced)" },
                                        { "id": "ml_adv_curriculum_teacher", "l": "Teacher‑student curriculum" },
                                        { "id": "ml_adv_curriculum_auto", "l": "Automatic curriculum learning (ACL)" }
                                    ]
                                },
                                {
                                    "id": "ml_adv_datacentric",
                                    "l": "Data‑centric AI",
                                    "ch": [
                                        { "id": "ml_adv_datacentric_quality", "l": "Data quality (cleaning, labelling, error detection)", "tool": "Great Expectations, Cleanlab" },
                                        { "id": "ml_adv_datacentric_aug", "l": "Data augmentation strategies", "tool": "Albumentations, imgaug" },
                                        { "id": "ml_adv_datacentric_synth", "l": "Synthetic data generation", "tool": "SDV (Synthetic Data Vault), Faker" },
                                        { "id": "ml_adv_datacentric_balance", "l": "Class imbalance & re‑balancing", "tool": "imbalanced-learn" },
                                        { "id": "ml_adv_datacentric_curation", "l": "Data curation & deduplication (MinHash, SimHash)", "tool": "datasketch" }
                                    ]
                                }
                            ]
                        },
                        {
                            "id": "ml_eval",
                            "l": "Model Evaluation & Selection",
                            "ch": [
                                {
                                    "id": "ml_eval_class",
                                    "l": "Classification metrics",
                                    "ch": [
                                        { "id": "ml_eval_class_acc", "l": "Accuracy, precision, recall, F1", "hw": "CPU", "tool": "scikit-learn (metrics)", "dev": "Cyril Goutte (F1)" },
                                        { "id": "ml_eval_class_auc", "l": "ROC‑AUC, PR‑AUC", "tool": "scikit-learn (roc_auc_score)", "dev": "Tom Fawcett" },
                                        { "id": "ml_eval_class_cm", "l": "Confusion matrix" },
                                        { "id": "ml_eval_class_kappa", "l": "Cohen's kappa", "dev": "Jacob Cohen" },
                                        { "id": "ml_eval_class_mcc", "l": "Matthews correlation coefficient", "dev": "Brian Matthews" }
                                    ]
                                },
                                {
                                    "id": "ml_eval_reg",
                                    "l": "Regression metrics",
                                    "ch": [
                                        { "id": "ml_eval_reg_mse", "l": "MSE, RMSE, MAE" },
                                        { "id": "ml_eval_reg_rsq", "l": "R², adjusted R²", "dev": "Charles Spearman" },
                                        { "id": "ml_eval_reg_mape", "l": "MAPE, SMAPE" }
                                    ]
                                },
                                {
                                    "id": "ml_eval_val",
                                    "l": "Validation strategies",
                                    "ch": [
                                        { "id": "ml_eval_val_split", "l": "Train/validation/test split", "tool": "scikit-learn (train_test_split)" },
                                        { "id": "ml_eval_val_cv", "l": "k‑fold cross‑validation", "dev": "Seymour Geisser" },
                                        { "id": "ml_eval_val_strat", "l": "Stratified & grouped k‑fold", "tool": "scikit-learn (StratifiedKFold)" },
                                        { "id": "ml_eval_val_loo", "l": "Leave‑one‑out (LOOCV)" },
                                        { "id": "ml_eval_val_ts", "l": "Time‑series walk‑forward" }
                                    ]
                                },
                                {
                                    "id": "ml_eval_hp",
                                    "l": "Hyperparameter tuning",
                                    "ch": [
                                        { "id": "ml_eval_hp_grid", "l": "Grid search", "tool": "scikit-learn (GridSearchCV)" },
                                        { "id": "ml_eval_hp_random", "l": "Random search", "tool": "scikit-learn (RandomizedSearchCV)", "dev": "James Bergstra" },
                                        { "id": "ml_eval_hp_bayes", "l": "Bayesian optimisation (TPE, GP)", "tool": "Optuna, Hyperopt, SMAC", "dev": "Jasper Snoek" },
                                        { "id": "ml_eval_hp_hyperband", "l": "Hyperband, ASHA", "tool": "Optuna, Ray Tune", "dev": "Lisha Li (Hyperband)" },
                                        { "id": "ml_eval_hp_nas", "l": "Neural architecture search (NAS)", "dev": "Barret Zoph" },
                                        { "id": "ml_eval_hp_automl", "l": "AutoML (Auto‑sklearn, H2O, AutoGluon)", "product": "AutoGluon (AWS), H2O Driverless AI", "dev": "Matthias Feurer (auto-sklearn)" }
                                    ]
                                },
                                {
                                    "id": "ml_eval_calib",
                                    "l": "Calibration & uncertainty",
                                    "ch": [
                                        { "id": "ml_eval_calib_platt", "l": "Platt scaling", "dev": "John Platt" },
                                        { "id": "ml_eval_calib_temp", "l": "Temperature scaling", "dev": "Chuan Guo" },
                                        { "id": "ml_eval_calib_conf", "l": "Conformal prediction", "dev": "Vladimir Vovk" },
                                        { "id": "ml_eval_calib_ece", "l": "Expected Calibration Error (ECE)", "tool": "scikit-learn (calibration)" }
                                    ]
                                }
                            ]
                        },
                        {
                            "id": "ml_xai",
                            "l": "Explainable AI (XAI)",
                            "ch": [
                                {
                                    "id": "ml_xai_scope",
                                    "l": "Scope & Motivation",
                                    "ch": [
                                        { "id": "ml_xai_scope_why", "l": "Why explainability? (trust, debugging, regulation)" },
                                        { "id": "ml_xai_scope_interpret", "l": "Interpretability vs explainability" },
                                        { "id": "ml_xai_scope_intrinsic", "l": "Intrinsic (linear models, trees) vs post‑hoc" },
                                        { "id": "ml_xai_scope_global", "l": "Global (entire model) vs local (single prediction)" }
                                    ]
                                },
                                {
                                    "id": "ml_xai_feat",
                                    "l": "Feature Attribution Methods",
                                    "ch": [
                                        {
                                            "id": "ml_xai_feat_grad",
                                            "l": "Gradient‑based",
                                            "ch": [
                                                { "id": "ml_xai_feat_grad_saliency", "l": "Saliency maps", "hw": "GPU", "tool": "Captum, TensorFlow", "dev": "Karen Simonyan" },
                                                { "id": "ml_xai_feat_grad_smooth", "l": "SmoothGrad", "dev": "Daniel Smilkov" },
                                                { "id": "ml_xai_feat_grad_intgrad", "l": "Integrated gradients", "hw": "GPU", "tool": "Captum", "dev": "Mukund Sundararajan (Google)" }
                                            ]
                                        },
                                        {
                                            "id": "ml_xai_feat_perturb",
                                            "l": "Perturbation‑based",
                                            "ch": [
                                                { "id": "ml_xai_feat_perturb_lime", "l": "LIME (local interpretable model‑agnostic explanations)", "hw": "CPU", "tool": "lime library", "dev": "Marco Ribeiro" },
                                                {
                                                    "id": "ml_xai_feat_perturb_shap",
                                                    "l": "SHAP (Shapley values)",
                                                    "ch": [
                                                        { "id": "ml_xai_feat_perturb_shap_kernel", "l": "KernelSHAP" },
                                                        { "id": "ml_xai_feat_perturb_shap_tree", "l": "TreeSHAP" },
                                                        { "id": "ml_xai_feat_perturb_shap_deep", "l": "DeepSHAP" }
                                                    ],
                                                    "dev": "Scott Lundberg"
                                                }
                                            ]
                                        },
                                        { "id": "ml_xai_feat_occlusion", "l": "Occlusion / masking", "hw": "CPU/GPU", "tool": "Captum (Occlusion)" }
                                    ]
                                },
                                {
                                    "id": "ml_xai_vis",
                                    "l": "Visualisation & Concept‑based",
                                    "ch": [
                                        {
                                            "id": "ml_xai_vis_cam",
                                            "l": "Class activation mapping",
                                            "ch": [
                                                { "id": "ml_xai_vis_cam_gradcam", "l": "Grad‑CAM", "hw": "GPU", "tool": "pytorch-grad-cam", "dev": "Ramprasaath Selvaraju" },
                                                { "id": "ml_xai_vis_cam_gradcampp", "l": "Grad‑CAM++", "dev": "Aditya Chattopadhyay" },
                                                { "id": "ml_xai_vis_cam_scorecam", "l": "Score‑CAM" }
                                            ]
                                        },
                                        {
                                            "id": "ml_xai_vis_concept",
                                            "l": "Concept‑based explanations",
                                            "ch": [
                                                { "id": "ml_xai_vis_concept_tcav", "l": "TCAV (testing with concept activation vectors)", "dev": "Been Kim (Google)" },
                                                { "id": "ml_xai_vis_concept_cbm", "l": "Concept bottleneck models", "dev": "Pang Wei Koh" }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "id": "ml_xai_mech",
                                    "l": "Mechanistic Interpretability",
                                    "ch": [
                                        { "id": "ml_xai_mech_circuits", "l": "Circuits (induction heads, superposition)", "dev": "Chris Olah (Anthropic)" },
                                        { "id": "ml_xai_mech_probes", "l": "Probing classifiers", "dev": "Guillaume Alain" },
                                        { "id": "ml_xai_mech_patching", "l": "Activation patching & causal tracing", "dev": "Neel Nanda" },
                                        { "id": "ml_xai_mech_sae", "l": "Sparse autoencoders for feature discovery", "dev": "Anthropic" },
                                        { "id": "ml_xai_mech_repr", "l": "Representation engineering", "dev": "Andy Zou" }
                                    ]
                                },
                                {
                                    "id": "ml_xai_model",
                                    "l": "Model‑specific Explanations",
                                    "ch": [
                                        { "id": "ml_xai_model_tree", "l": "Decision trees & random forests (feature importance, path explanations)", "tool": "scikit-learn (tree.plot_tree), dtreeviz" },
                                        { "id": "ml_xai_model_linear", "l": "Linear models (coefficients, effect size)" },
                                        { "id": "ml_xai_model_svm", "l": "SVM (support vectors, dual coefficients)" },
                                        { "id": "ml_xai_model_nn", "l": "Neural networks (attribution, layer relevance)", "tool": "Captum, TensorFlow Explainability" }
                                    ]
                                },
                                {
                                    "id": "ml_xai_counter",
                                    "l": "Counterfactual & Contrastive Explanations",
                                    "ch": [
                                        { "id": "ml_xai_counter_cf", "l": "Counterfactual generation (DICE, Wachter)", "tool": "DiCE (Microsoft)", "dev": "Amit Sharma (DiCE)" },
                                        { "id": "ml_xai_counter_contrast", "l": "Contrastive explanations (why P rather than Q)" }
                                    ]
                                },
                                {
                                    "id": "ml_xai_rule",
                                    "l": "Rule Extraction & Surrogate Models",
                                    "ch": [
                                        { "id": "ml_xai_rule_decomposition", "l": "Decompositional (e.g., extracting rules from NNs)" },
                                        { "id": "ml_xai_rule_pedagogical", "l": "Pedagogical (train a transparent surrogate)", "tool": "sklearn (DecisionTreeClassifier)" },
                                        { "id": "ml_xai_rule_anchor", "l": "Anchors (high‑precision rules)", "dev": "Marco Ribeiro" }
                                    ]
                                },
                                {
                                    "id": "ml_xai_llm",
                                    "l": "XAI for Large Language Models",
                                    "ch": [
                                        { "id": "ml_xai_llm_logit", "l": "Logit lens & attention visualisation", "tool": "TransformerLens", "dev": "Neel Nanda" },
                                        { "id": "ml_xai_llm_neurons", "l": "Neuron activation analysis (GeLU, MLP layers)" },
                                        { "id": "ml_xai_llm_icl", "l": "Explaining in‑context learning" }
                                    ]
                                },
                                {
                                    "id": "ml_xai_eval",
                                    "l": "Evaluation of Explanations",
                                    "ch": [
                                        { "id": "ml_xai_eval_fidelity", "l": "Fidelity (how well explanation matches model)" },
                                        { "id": "ml_xai_eval_stability", "l": "Stability / robustness" },
                                        { "id": "ml_xai_eval_complexity", "l": "Complexity (sparsity, size)" },
                                        { "id": "ml_xai_eval_human", "l": "Human‑subject evaluation (usefulness, trust)" }
                                    ]
                                },
                                {
                                    "id": "ml_xai_tools",
                                    "l": "XAI Libraries & Frameworks",
                                    "ch": [
                                        { "id": "ml_xai_tools_captum", "l": "Captum (PyTorch)", "hw": "CPU/GPU", "product": "Captum (Facebook AI)", "dev": "Facebook AI" },
                                        { "id": "ml_xai_tools_tfexplain", "l": "TensorFlow Explainability", "product": "TensorFlow (Google)" },
                                        { "id": "ml_xai_tools_shap_lib", "l": "SHAP library", "dev": "Scott Lundberg" },
                                        { "id": "ml_xai_tools_lime_lib", "l": "LIME", "dev": "Marco Ribeiro" },
                                        { "id": "ml_xai_tools_eli5", "l": "ELI5" },
                                        { "id": "ml_xai_tools_dice", "l": "DiCE (counterfactuals)", "dev": "Microsoft Research" }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                // ─────────────────────────────────────────────────────────
                // 5. NATURAL LANGUAGE PROCESSING (major AI branch)
                // ─────────────────────────────────────────────────────────
                {
                    "id": "nlp",
                    "c": "nlp",
                    "l": "Natural Language Processing",
                    "ch": [
                        {
                            "id": "nlp_pre",
                            "l": "Text Preprocessing Pipeline",
                            "ch": [
                                {
                                    "id": "nlp_pre_token",
                                    "l": "Tokenisation",
                                    "ch": [
                                        { "id": "nlp_pre_token_word", "l": "Word tokenisation (whitespace, punctuation)", "hw": "CPU", "tool": "NLTK, spaCy", "dev": "NLTK team, spaCy" },
                                        {
                                            "id": "nlp_pre_token_subword", "l": "Subword tokenisation", "ch": [
                                                { "id": "nlp_pre_token_bpe", "l": "Byte‑pair encoding (BPE)", "hw": "CPU", "tool": "Hugging Face tokenizers", "dev": "Ricardo Sennrich et al." },
                                                { "id": "nlp_pre_token_wordpiece", "l": "WordPiece (BERT)", "hw": "CPU", "tool": "Hugging Face tokenizers", "dev": "Google" },
                                                { "id": "nlp_pre_token_unigram", "l": "Unigram language model (SentencePiece)", "hw": "CPU", "tool": "SentencePiece", "dev": "Google (Kudo, Richardson)" }
                                            ]
                                        },
                                        { "id": "nlp_pre_token_char", "l": "Character‑level tokenisation", "hw": "CPU" },
                                        { "id": "nlp_pre_token_sentencepiece", "l": "SentencePiece (end‑to‑end)", "hw": "CPU", "tool": "SentencePiece", "dev": "Google" }
                                    ]
                                },
                                {
                                    "id": "nlp_pre_norm",
                                    "l": "Normalisation",
                                    "ch": [
                                        { "id": "nlp_pre_norm_lower", "l": "Lowercasing" },
                                        { "id": "nlp_pre_norm_unicode", "l": "Unicode normalisation (NFKC, NFD)", "tool": "unicodedata (Python)", "hw": "CPU" },
                                        { "id": "nlp_pre_norm_stop", "l": "Stop word removal", "tool": "NLTK, spaCy" }
                                    ]
                                },
                                {
                                    "id": "nlp_pre_stem",
                                    "l": "Stemming & Lemmatisation",
                                    "ch": [
                                        { "id": "nlp_pre_stem_porter", "l": "Porter stemmer", "tool": "NLTK", "dev": "Martin Porter" },
                                        { "id": "nlp_pre_stem_snowball", "l": "Snowball stemmer", "tool": "NLTK, Snowball", "dev": "Martin Porter" },
                                        { "id": "nlp_pre_lemmatize", "l": "Lemmatisation (WordNet, spaCy)", "tool": "NLTK WordNet, spaCy", "hw": "CPU" }
                                    ]
                                },
                                { "id": "nlp_pre_sent", "l": "Sentence segmentation", "tool": "spaCy, NLTK", "hw": "CPU" },
                                { "id": "nlp_pre_lang", "l": "Language detection", "tool": "langdetect, fastText", "hw": "CPU", "dev": "Google (fastText)" }
                            ]
                        },
                        {
                            "id": "nlp_ling",
                            "l": "Linguistic Analysis",
                            "ch": [
                                {
                                    "id": "nlp_ling_pos",
                                    "l": "Part‑of‑speech (POS) tagging",
                                    "ch": [
                                        { "id": "nlp_ling_pos_hmm", "l": "HMM‑based taggers", "hw": "CPU", "tool": "NLTK" },
                                        { "id": "nlp_ling_pos_crf", "l": "CRF‑based taggers", "hw": "CPU", "tool": "CRF++", "dev": "Taku Kudo" },
                                        { "id": "nlp_ling_pos_nn", "l": "Neural (BiLSTM, BERT)", "hw": "GPU 4GB+", "tool": "spaCy, Stanza", "dev": "Stanford NLP" }
                                    ]
                                },
                                {
                                    "id": "nlp_ling_ner",
                                    "l": "Named entity recognition (NER)",
                                    "ch": [
                                        { "id": "nlp_ling_ner_rule", "l": "Rule‑based (gazetteers)", "hw": "CPU", "tool": "spaCy EntityRuler" },
                                        { "id": "nlp_ling_ner_crf", "l": "CRF + features", "hw": "CPU", "tool": "CRF++, sklearn‑crfsuite" },
                                        { "id": "nlp_ling_ner_nn", "l": "Neural NER (BiLSTM‑CRF, BERT)", "hw": "GPU 6GB+", "tool": "Hugging Face, spaCy transformers", "dev": "Hugging Face" },
                                        { "id": "nlp_ling_ner_few", "l": "Few‑shot NER", "hw": "GPU 8GB", "tool": "SetFit, Prompt tuning" }
                                    ]
                                },
                                {
                                    "id": "nlp_ling_dep",
                                    "l": "Dependency parsing",
                                    "ch": [
                                        { "id": "nlp_ling_dep_graph", "l": "Graph‑based (Eisner, MST)", "hw": "CPU", "tool": "Stanford Parser", "dev": "Stanford NLP" },
                                        { "id": "nlp_ling_dep_trans", "l": "Transition‑based (Arc‑standard, Arc‑eager)", "hw": "CPU", "tool": "spaCy", "dev": "Matthew Honnibal" },
                                        { "id": "nlp_ling_dep_neural", "l": "Neural (BiLSTM, BERT)", "hw": "GPU 6GB", "tool": "Stanza, spaCy", "dev": "Stanford NLP" }
                                    ]
                                },
                                {
                                    "id": "nlp_ling_const",
                                    "l": "Constituency parsing",
                                    "ch": [
                                        { "id": "nlp_ling_const_cfg", "l": "PCFG (CKY algorithm)", "hw": "CPU", "tool": "NLTK", "dev": "John Cocke, Tadao Kasami" },
                                        { "id": "nlp_ling_const_neural", "l": "Neural (RNNG, span‑based)", "hw": "GPU 8GB", "tool": "Benepar, SuPar", "dev": "Stanford, MIT" }
                                    ]
                                },
                                {
                                    "id": "nlp_ling_coref",
                                    "l": "Coreference resolution",
                                    "ch": [
                                        { "id": "nlp_ling_coref_mention", "l": "Mention detection, clustering", "hw": "CPU", "tool": "Stanford CoreNLP" },
                                        { "id": "nlp_ling_coref_neural", "l": "Neural (span‑ranking, BERT)", "hw": "GPU 8GB", "tool": "AllenNLP, spaCy", "dev": "Allen Institute for AI" }
                                    ]
                                },
                                { "id": "nlp_ling_srl", "l": "Semantic role labelling (SRL)", "hw": "GPU 6GB", "tool": "AllenNLP, PropBank", "dev": "University of Colorado" },
                                { "id": "nlp_ling_wsd", "l": "Word sense disambiguation (WSD)", "hw": "CPU", "tool": "NLTK WordNet", "dev": "Princeton University" }
                            ]
                        },
                        {
                            "id": "nlp_repr",
                            "l": "Text Representations",
                            "ch": [
                                { "id": "nlp_repr_bow", "l": "Bag‑of‑words (BoW)", "hw": "CPU", "tool": "scikit‑learn" },
                                { "id": "nlp_repr_tfidf", "l": "TF‑IDF", "hw": "CPU", "tool": "scikit‑learn" },
                                { "id": "nlp_repr_ngram", "l": "N‑gram models", "hw": "CPU", "tool": "NLTK" },
                                {
                                    "id": "nlp_repr_emb",
                                    "l": "Word embeddings",
                                    "ch": [
                                        { "id": "nlp_repr_emb_w2v", "l": "Word2Vec (CBOW, Skip‑gram)", "hw": "CPU/GPU", "tool": "Gensim", "dev": "Google (Mikolov et al.)" },
                                        { "id": "nlp_repr_emb_glove", "l": "GloVe (global vectors)", "hw": "CPU", "tool": "Gensim, spaCy", "dev": "Stanford (Pennington et al.)" },
                                        { "id": "nlp_repr_emb_fasttext", "l": "FastText (subword)", "hw": "CPU", "tool": "fastText (Facebook)", "dev": "Facebook AI (Bojanowski et al.)" },
                                        { "id": "nlp_repr_emb_elmo", "l": "ELMo (contextual)", "hw": "GPU 6GB", "tool": "AllenNLP", "dev": "Allen Institute for AI (Peters et al.)" }
                                    ]
                                },
                                {
                                    "id": "nlp_repr_sent",
                                    "l": "Sentence & document embeddings",
                                    "ch": [
                                        { "id": "nlp_repr_sent_doc2vec", "l": "Doc2Vec (PV‑DM, PV‑DBOW)", "hw": "CPU", "tool": "Gensim", "dev": "Le & Mikolov" },
                                        { "id": "nlp_repr_sent_sbert", "l": "SBERT (sentence BERT)", "hw": "GPU 6GB", "tool": "sentence‑transformers (Hugging Face)", "dev": "Nils Reimers" },
                                        { "id": "nlp_repr_sent_use", "l": "Universal Sentence Encoder (USE)", "hw": "CPU/GPU", "tool": "TensorFlow Hub", "dev": "Google" },
                                        { "id": "nlp_repr_sent_openai", "l": "OpenAI text‑embedding models (ada, text‑embedding‑3)", "hw": "Cloud API", "product": "OpenAI Embeddings", "dev": "OpenAI" }
                                    ]
                                }
                            ]
                        },
                        {
                            "id": "nlp_tasks",
                            "l": "Core NLP Tasks",
                            "ch": [
                                {
                                    "id": "nlp_tasks_class",
                                    "l": "Text classification",
                                    "ch": [
                                        { "id": "nlp_tasks_class_sent", "l": "Sentiment analysis (polarity, aspect‑based)", "hw": "CPU/GPU", "tool": "Hugging Face, VADER", "dev": "Hutto, Gilbert (VADER)" },
                                        { "id": "nlp_tasks_class_topic", "l": "Topic classification", "tool": "scikit‑learn, BERT", "hw": "GPU 4GB+" },
                                        { "id": "nlp_tasks_class_intent", "l": "Intent detection (chatbots)", "hw": "GPU 4GB", "tool": "Rasa, BERT", "dev": "Rasa" },
                                        { "id": "nlp_tasks_class_toxic", "l": "Toxic content detection", "hw": "GPU 4GB", "tool": "Detoxify, Perspective API", "dev": "Google Jigsaw" },
                                        { "id": "nlp_tasks_class_emotion", "l": "Emotion recognition", "tool": "GoEmotions, BERT", "dev": "Google Research" }
                                    ]
                                },
                                {
                                    "id": "nlp_tasks_mt",
                                    "l": "Machine translation",
                                    "ch": [
                                        { "id": "nlp_tasks_mt_stat", "l": "Statistical MT (phrase‑based, IBM models)", "hw": "CPU", "tool": "Moses", "dev": "Moses community" },
                                        { "id": "nlp_tasks_mt_neural", "l": "Neural MT (seq2seq + attention)", "hw": "GPU 8GB+", "tool": "OpenNMT, Fairseq", "dev": "Harvard, Facebook" },
                                        { "id": "nlp_tasks_mt_trans", "l": "Transformer MT (MarianMT, mBART)", "hw": "GPU 8GB+", "tool": "Hugging Face Transformers", "dev": "Microsoft (Marian)" },
                                        { "id": "nlp_tasks_mt_low", "l": "Low‑resource & zero‑shot translation", "hw": "GPU 8GB", "tool": "M2M‑100, NLLB", "dev": "Meta AI (NLLB team)" },
                                        {
                                            "id": "nlp_tasks_mt_products", "l": "Translation products", "ch": [
                                                { "id": "nlp_tasks_mt_google", "l": "Google Translate", "hw": "Cloud", "product": "Google Translate", "dev": "Google" },
                                                { "id": "nlp_tasks_mt_deepl", "l": "DeepL", "hw": "Cloud", "product": "DeepL", "dev": "DeepL GmbH" },
                                                { "id": "nlp_tasks_mt_amazon", "l": "Amazon Translate", "hw": "Cloud", "product": "Amazon Translate", "dev": "AWS" }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "id": "nlp_tasks_sum",
                                    "l": "Text summarisation",
                                    "ch": [
                                        { "id": "nlp_tasks_sum_ext", "l": "Extractive (TextRank, Lead‑3, BERT‑ext)", "hw": "CPU/GPU", "tool": "Gensim, Sumy", "dev": "Mihalcea, Tarau (TextRank)" },
                                        { "id": "nlp_tasks_sum_abs", "l": "Abstractive (BART, T5, PEGASUS)", "hw": "GPU 8GB+", "tool": "Hugging Face Transformers", "dev": "Google (BART), Facebook (BART)" },
                                        { "id": "nlp_tasks_sum_query", "l": "Query‑focused summarisation", "hw": "GPU 8GB" },
                                        { "id": "nlp_tasks_sum_multi", "l": "Multi‑document summarisation", "hw": "GPU 8GB" }
                                    ]
                                },
                                {
                                    "id": "nlp_tasks_qa",
                                    "l": "Question answering",
                                    "ch": [
                                        { "id": "nlp_tasks_qa_ext", "l": "Extractive QA (SQuAD, BiDAF, BERT)", "hw": "GPU 6GB", "tool": "Hugging Face", "dev": "Stanford (SQuAD), Google (BERT)" },
                                        { "id": "nlp_tasks_qa_abs", "l": "Abstractive QA", "hw": "GPU 8GB", "tool": "T5, BART" },
                                        { "id": "nlp_tasks_qa_open", "l": "Open‑domain QA (retriever‑reader)", "hw": "GPU 8GB+", "tool": "DPR, RAG, Haystack", "dev": "Facebook (DPR), deepset.ai (Haystack)" },
                                        { "id": "nlp_tasks_qa_visual", "l": "Visual QA (VQA)", "hw": "GPU 8GB", "tool": "MMF, LLaVA", "dev": "Facebook (MMF)" },
                                        { "id": "nlp_tasks_qa_kb", "l": "Knowledge‑based QA (graph QA)", "hw": "GPU 8GB", "tool": "GrailQA, KQA Pro" }
                                    ]
                                },
                                {
                                    "id": "nlp_tasks_ie",
                                    "l": "Information extraction",
                                    "ch": [
                                        { "id": "nlp_tasks_ie_re", "l": "Relation extraction (distant supervision, few‑shot)", "hw": "GPU 6GB", "tool": "REBEL, OpenNRE", "dev": "Babelscape (REBEL)" },
                                        { "id": "nlp_tasks_ie_event", "l": "Event extraction (trigger, argument)", "hw": "GPU 6GB", "tool": "OneIE, EEQA" },
                                        { "id": "nlp_tasks_ie_temp", "l": "Temporal information extraction (TimeML, TempEval)", "tool": "CLEARS" },
                                        { "id": "nlp_tasks_ie_openie", "l": "OpenIE (Open Information Extraction)", "hw": "CPU", "tool": "ClausIE, OpenIE4", "dev": "University of Washington" }
                                    ]
                                },
                                { "id": "nlp_tasks_nli", "l": "Natural language inference (NLI) / textual entailment", "hw": "GPU 6GB", "tool": "Hugging Face (MNLI)", "dev": "NYU, Stanford" },
                                { "id": "nlp_tasks_sts", "l": "Semantic textual similarity (STS)", "hw": "GPU 6GB", "tool": "sentence‑transformers", "dev": "Nils Reimers" },
                                { "id": "nlp_tasks_gen", "l": "Text generation & creative writing", "hw": "GPU 8GB+", "tool": "GPT, LLaMA", "dev": "OpenAI, Meta" },
                                { "id": "nlp_tasks_grammar", "l": "Grammar correction & spell checking", "hw": "CPU/GPU", "tool": "LanguageTool, Gramformer", "product": "Grammarly", "dev": "Grammarly" }
                            ]
                        },
                        {
                            "id": "nlp_llm",
                            "l": "Large Language Models (LLMs)",
                            "ch": [
                                {
                                    "id": "nlp_llm_pretrain",
                                    "l": "Pre‑training paradigms",
                                    "ch": [
                                        { "id": "nlp_llm_pretrain_clm", "l": "Causal language modelling (CLM) – GPT style", "hw": "GPU cluster (8x A100)", "tool": "Hugging Face, Megatron", "dev": "OpenAI" },
                                        { "id": "nlp_llm_pretrain_mlm", "l": "Masked language modelling (MLM) – BERT style", "hw": "GPU cluster (4x V100)", "tool": "Hugging Face", "dev": "Google" },
                                        { "id": "nlp_llm_pretrain_span", "l": "Span corruption – T5, BART", "hw": "GPU cluster (8x V100)", "tool": "Hugging Face", "dev": "Google (T5), Facebook (BART)" },
                                        { "id": "nlp_llm_pretrain_mix", "l": "Mixture of objectives (UniLM, ELECTRA)", "hw": "GPU cluster", "tool": "Hugging Face", "dev": "Microsoft (ELECTRA)" }
                                    ]
                                },
                                {
                                    "id": "nlp_llm_align",
                                    "l": "Alignment & fine‑tuning",
                                    "ch": [
                                        { "id": "nlp_llm_align_sft", "l": "Supervised fine‑tuning (SFT)", "hw": "GPU 8GB+", "tool": "Hugging Face, Axolotl", "dev": "Hugging Face" },
                                        {
                                            "id": "nlp_llm_align_rlhf", "l": "RLHF (reward model + PPO)", "ch": [
                                                { "id": "nlp_llm_align_rlhf_reward", "l": "Reward modelling", "hw": "GPU 8GB+", "tool": "TRL (Hugging Face)", "dev": "OpenAI, Anthropic" },
                                                { "id": "nlp_llm_align_rlhf_ppo", "l": "PPO fine‑tuning", "hw": "GPU 8GB+ (multi‑GPU)", "tool": "TRL, DeepSpeed", "dev": "OpenAI" }
                                            ]
                                        },
                                        { "id": "nlp_llm_align_dpo", "l": "DPO (direct preference optimisation)", "hw": "GPU 8GB+", "tool": "TRL, Hugging Face", "dev": "Stanford (Rafailov et al.)" },
                                        { "id": "nlp_llm_align_const", "l": "Constitutional AI (Anthropic)", "hw": "GPU cluster", "tool": "Anthropic API", "product": "Claude", "dev": "Anthropic" },
                                        { "id": "nlp_llm_align_rlaif", "l": "RLAIF (AI feedback)", "hw": "GPU cluster", "tool": "Self‑Instruct, Constitutional AI" },
                                        { "id": "nlp_llm_align_inst", "l": "Instruction tuning (FLAN, InstructGPT)", "hw": "GPU 8GB+", "tool": "Hugging Face", "dev": "Google (FLAN), OpenAI (InstructGPT)" }
                                    ]
                                },
                                {
                                    "id": "nlp_llm_peft",
                                    "l": "Efficient fine‑tuning (PEFT)",
                                    "ch": [
                                        { "id": "nlp_llm_peft_lora", "l": "LoRA (low‑rank adaptation)", "hw": "GPU 6GB+ (reduces memory)", "tool": "PEFT (Hugging Face)", "dev": "Microsoft (Hu et al.)" },
                                        { "id": "nlp_llm_peft_qlora", "l": "QLoRA (quantised LoRA)", "hw": "GPU 6GB (4‑bit quantisation)", "tool": "bitsandbytes, PEFT", "dev": "Washington University (Dettmers et al.)" },
                                        { "id": "nlp_llm_peft_adapter", "l": "Adapter layers", "tool": "AdapterHub", "dev": "Google Research (Houlsby et al.)" },
                                        { "id": "nlp_llm_peft_prefix", "l": "Prefix tuning & prompt tuning", "tool": "Hugging Face", "dev": "Stanford (Li & Liang)" },
                                        { "id": "nlp_llm_peft_ia3", "l": "IA³ (infused adapter)", "tool": "PEFT", "dev": "IBM" }
                                    ]
                                },
                                {
                                    "id": "nlp_llm_prompt",
                                    "l": "Prompt engineering",
                                    "ch": [
                                        { "id": "nlp_llm_prompt_zero", "l": "Zero‑shot prompting", "hw": "CPU/GPU", "tool": "LangChain", "dev": "OpenAI" },
                                        { "id": "nlp_llm_prompt_few", "l": "Few‑shot prompting (in‑context learning)", "hw": "GPU 4GB+", "tool": "LangChain" },
                                        { "id": "nlp_llm_prompt_cot", "l": "Chain‑of‑thought (CoT)", "hw": "GPU 4GB+", "tool": "LangChain", "dev": "Google (Wei et al.)" },
                                        { "id": "nlp_llm_prompt_sc", "l": "Self‑consistency", "tool": "LangChain", "dev": "Google (Wang et al.)" },
                                        { "id": "nlp_llm_prompt_tot", "l": "Tree‑of‑thoughts (ToT)", "tool": "LangChain", "dev": "Princeton (Yao et al.)" },
                                        { "id": "nlp_llm_prompt_react", "l": "ReAct (reasoning + acting)", "tool": "LangChain", "dev": "Google (Yao et al.)" },
                                        { "id": "nlp_llm_prompt_structure", "l": "Structured output prompting (JSON, XML)", "tool": "LangChain, Instructor" },
                                        { "id": "nlp_llm_prompt_system", "l": "System prompts & personas", "tool": "OpenAI API, Anthropic API" }
                                    ]
                                },
                                {
                                    "id": "nlp_llm_rag",
                                    "l": "Retrieval‑augmented generation (RAG)",
                                    "ch": [
                                        { "id": "nlp_llm_rag_dense", "l": "Retrieval with dense embeddings", "hw": "GPU 6GB", "tool": "FAISS, Chroma", "dev": "Facebook (FAISS)" },
                                        { "id": "nlp_llm_rag_hybrid", "l": "Hybrid retrieval (BM25 + dense)", "hw": "CPU/GPU", "tool": "Weaviate, Qdrant", "dev": "Weaviate, Qdrant" },
                                        { "id": "nlp_llm_rag_rerank", "l": "Reranking (cross‑encoder)", "hw": "GPU 6GB", "tool": "sentence‑transformers (cross‑encoder)", "dev": "Nils Reimers" },
                                        { "id": "nlp_llm_rag_knowledge", "l": "Knowledge‑grounded generation", "hw": "GPU 8GB", "tool": "LangChain, LlamaIndex" },
                                        {
                                            "id": "nlp_llm_rag_advanced", "l": "Advanced RAG", "ch": [
                                                { "id": "nlp_llm_rag_chunk", "l": "Chunking strategies (recursive, semantic)", "tool": "LangChain" },
                                                { "id": "nlp_llm_rag_multi", "l": "Multi‑hop RAG", "tool": "LangGraph" },
                                                { "id": "nlp_llm_rag_graph", "l": "GraphRAG (Microsoft)", "tool": "GraphRAG (Python)", "dev": "Microsoft Research" }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "id": "nlp_llm_compress",
                                    "l": "Model compression",
                                    "ch": [
                                        { "id": "nlp_llm_compress_quant", "l": "Quantisation (INT8, INT4, GPTQ, AWQ)", "hw": "GPU 4GB+", "tool": "bitsandbytes, AutoGPTQ", "dev": "Hugging Face, MIT (GPTQ)" },
                                        { "id": "nlp_llm_compress_prune", "l": "Pruning (structured, unstructured)", "tool": "Torch Prune, Neural Magic", "dev": "Neural Magic" },
                                        { "id": "nlp_llm_compress_distill", "l": "Knowledge distillation", "hw": "GPU 8GB", "tool": "Hugging Face", "dev": "Hinton et al." },
                                        { "id": "nlp_llm_compress_spec", "l": "Speculative decoding", "hw": "GPU 8GB", "tool": "Hugging Face, Medusa", "dev": "Google (Speculative Decoding)" }
                                    ]
                                },
                                {
                                    "id": "nlp_llm_decode",
                                    "l": "Decoding strategies",
                                    "ch": [
                                        { "id": "nlp_llm_decode_greedy", "l": "Greedy decoding", "tool": "Hugging Face" },
                                        { "id": "nlp_llm_decode_beam", "l": "Beam search", "tool": "Hugging Face" },
                                        { "id": "nlp_llm_decode_temp", "l": "Temperature sampling", "tool": "Hugging Face" },
                                        { "id": "nlp_llm_decode_topk", "l": "Top‑k sampling", "tool": "Hugging Face" },
                                        { "id": "nlp_llm_decode_topp", "l": "Top‑p (nucleus) sampling", "tool": "Hugging Face", "dev": "Google (Holtzman et al.)" },
                                        { "id": "nlp_llm_decode_rep", "l": "Repetition penalty, typical sampling", "tool": "Hugging Face" }
                                    ]
                                },
                                {
                                    "id": "nlp_llm_families",
                                    "l": "Key LLM families",
                                    "ch": [
                                        { "id": "nlp_llm_families_gpt", "l": "GPT series (OpenAI)", "product": "GPT‑3, GPT‑4, GPT‑4o", "dev": "OpenAI", "hw": "Cloud API or Azure" },
                                        { "id": "nlp_llm_families_claude", "l": "Claude (Anthropic)", "product": "Claude 3 Haiku, Sonnet, Opus", "dev": "Anthropic", "hw": "Cloud API" },
                                        { "id": "nlp_llm_families_gemini", "l": "Gemini (Google DeepMind)", "product": "Gemini 1.5, 2.0 Flash", "dev": "Google DeepMind", "hw": "Cloud API" },
                                        { "id": "nlp_llm_families_llama", "l": "LLaMA / LLaMA 2/3 (Meta)", "product": "LLaMA 2, 3 (8B, 70B, 405B)", "dev": "Meta AI", "hw": "GPU 8GB+ (quantised) to 8x A100 (training)" },
                                        { "id": "nlp_llm_families_mistral", "l": "Mistral & Mixtral", "product": "Mistral 7B, Mixtral 8x7B, Mistral Large", "dev": "Mistral AI", "hw": "GPU 6GB+ (Mistral 7B), 24GB+ (Mixtral)" },
                                        { "id": "nlp_llm_families_open", "l": "Open models (Falcon, Command R)", "product": "Falcon (TII), Command R (Cohere)", "dev": "TII, Cohere", "hw": "GPU 8GB+" },
                                        {
                                            "id": "nlp_llm_families_chinese", "l": "Chinese models", "ch": [
                                                { "id": "nlp_llm_families_qwen", "l": "Qwen (Alibaba)", "product": "Qwen 2.5", "dev": "Alibaba Cloud", "hw": "GPU 8GB+" },
                                                { "id": "nlp_llm_families_deepseek", "l": "DeepSeek (深度求索)", "product": "DeepSeek V3, R1", "dev": "DeepSeek", "hw": "GPU 8GB+ (distilled versions)" },
                                                { "id": "nlp_llm_families_yi", "l": "Yi (01.AI)", "product": "Yi 6B, 34B", "dev": "01.AI (Kai‑Fu Lee)", "hw": "GPU 6GB+" }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "id": "nlp_speech",
                            "l": "Speech & Audio Processing",
                            "ch": [
                                {
                                    "id": "nlp_speech_asr",
                                    "l": "Automatic speech recognition (ASR)",
                                    "ch": [
                                        { "id": "nlp_speech_asr_gmm", "l": "GMM‑HMM models (Kaldi)", "hw": "CPU", "tool": "Kaldi", "dev": "Johns Hopkins University" },
                                        { "id": "nlp_speech_asr_ctc", "l": "CTC‑based models (DeepSpeech, Wav2Vec)", "hw": "GPU 6GB+", "tool": "TensorFlow, PyTorch", "dev": "Baidu (DeepSpeech), Meta (Wav2Vec)" },
                                        { "id": "nlp_speech_asr_attn", "l": "Attention‑based encoder‑decoder (LAS, RNN‑T)", "hw": "GPU 8GB+", "tool": "ESPnet, NeMo", "dev": "NVIDIA (NeMo)" },
                                        { "id": "nlp_speech_asr_whisper", "l": "Whisper (OpenAI)", "hw": "GPU 6GB+ (small), 10GB+ (large)", "tool": "OpenAI Whisper (PyTorch)", "product": "Whisper API", "dev": "OpenAI" },
                                        { "id": "nlp_speech_asr_stream", "l": "Streaming ASR", "hw": "CPU/GPU", "tool": "Vosk, Silero", "dev": "Vosk team" }
                                    ]
                                },
                                {
                                    "id": "nlp_speech_tts",
                                    "l": "Text‑to‑speech (TTS)",
                                    "ch": [
                                        { "id": "nlp_speech_tts_concatenative", "l": "Concatenative synthesis (Festival)", "hw": "CPU", "tool": "Festival, eSpeak", "dev": "University of Edinburgh" },
                                        { "id": "nlp_speech_tts_wavenet", "l": "WaveNet (DeepMind)", "hw": "GPU 8GB+", "tool": "WaveNet (TensorFlow)", "product": "Google Cloud TTS", "dev": "DeepMind" },
                                        { "id": "nlp_speech_tts_tacotron", "l": "Tacotron & Tacotron 2", "hw": "GPU 8GB+", "tool": "Tacotron2 (PyTorch)", "dev": "Google (Wang et al.)" },
                                        { "id": "nlp_speech_tts_fastspeech", "l": "FastSpeech & VITS", "hw": "GPU 6GB+", "tool": "Coqui TTS", "dev": "Coqui AI" },
                                        { "id": "nlp_speech_tts_diffusion", "l": "Diffusion‑based TTS (Diff‑TTS, NaturalSpeech)", "hw": "GPU 8GB+", "tool": "Diff‑TTS" },
                                        { "id": "nlp_speech_tts_voice", "l": "Zero‑shot voice cloning", "hw": "GPU 8GB+", "tool": "YourTTS, Tortoise‑TTS", "dev": "Coqui, Tortoise" },
                                        {
                                            "id": "nlp_speech_tts_products", "l": "TTS products", "ch": [
                                                { "id": "nlp_speech_tts_elevenlabs", "l": "ElevenLabs", "hw": "Cloud", "product": "ElevenLabs", "dev": "ElevenLabs" },
                                                { "id": "nlp_speech_tts_azure", "l": "Azure TTS", "hw": "Cloud", "product": "Azure Cognitive Services", "dev": "Microsoft" },
                                                { "id": "nlp_speech_tts_google", "l": "Google Cloud TTS (WaveNet)", "hw": "Cloud", "product": "Cloud TTS", "dev": "Google" }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "id": "nlp_speech_speaker",
                                    "l": "Speaker processing",
                                    "ch": [
                                        { "id": "nlp_speech_speaker_id", "l": "Speaker identification & verification", "hw": "CPU/GPU", "tool": "SpeechBrain, Resemblyzer", "dev": "SpeechBrain team" },
                                        { "id": "nlp_speech_speaker_diar", "l": "Speaker diarisation (who spoke when)", "hw": "CPU/GPU", "tool": "PyAnnote, NeMo", "dev": "NVIDIA (NeMo)" },
                                        { "id": "nlp_speech_speaker_conv", "l": "Voice conversion", "tool": "SVC, FreeVC", "hw": "GPU 6GB+" }
                                    ]
                                },
                                { "id": "nlp_speech_class", "l": "Audio classification & tagging", "hw": "GPU 4GB+", "tool": "YAMNet, VGGish", "dev": "Google (YAMNet)" },
                                { "id": "nlp_speech_music", "l": "Music generation", "product": "MusicLM (Google), AudioCraft (Meta)", "dev": "Google, Meta", "hw": "Cloud / GPU cluster" },
                                { "id": "nlp_speech_sed", "l": "Sound event detection", "tool": "DESED, AudioSet", "dev": "Google (AudioSet)" }
                            ]
                        },
                        {
                            "id": "nlp_multilingual",
                            "l": "Multilingual & Cross‑lingual NLP",
                            "ch": [
                                {
                                    "id": "nlp_multilingual_models",
                                    "l": "Multilingual models",
                                    "ch": [
                                        { "id": "nlp_multilingual_mbert", "l": "mBERT (Multilingual BERT)", "hw": "GPU 8GB+", "tool": "Hugging Face", "dev": "Google" },
                                        { "id": "nlp_multilingual_xlmr", "l": "XLM‑R (XLM‑RoBERTa)", "hw": "GPU 8GB+", "tool": "Hugging Face", "dev": "Facebook AI" },
                                        { "id": "nlp_multilingual_mt5", "l": "mT5 (Multilingual T5)", "hw": "GPU 8GB+", "tool": "Hugging Face", "dev": "Google" },
                                        { "id": "nlp_multilingual_nllb", "l": "NLLB (No Language Left Behind)", "hw": "GPU 16GB+ (1.3B), 80GB+ (54B)", "tool": "Hugging Face", "dev": "Meta AI" }
                                    ]
                                },
                                { "id": "nlp_multilingual_transfer", "l": "Cross‑lingual transfer (zero‑shot, few‑shot)", "hw": "GPU 8GB+", "tool": "Hugging Face, XLM‑R" },
                                { "id": "nlp_multilingual_lowres", "l": "Low‑resource language support", "hw": "CPU/GPU", "tool": "Masakhane, AfricaNLP", "dev": "Masakhane community" },
                                { "id": "nlp_multilingual_codeswitch", "l": "Code‑switching & mixed language", "tool": "LinCE benchmarks", "dev": "ECNU, CMU" }
                            ]
                        },
                        {
                            "id": "nlp_dialogue",
                            "l": "Dialogue & Conversational AI",
                            "ch": [
                                {
                                    "id": "nlp_dialogue_task",
                                    "l": "Task‑oriented dialogue systems",
                                    "ch": [
                                        { "id": "nlp_dialogue_task_nlu", "l": "Natural language understanding (intent, slots)", "hw": "GPU 4GB+", "tool": "Rasa, Hugging Face", "dev": "Rasa" },
                                        { "id": "nlp_dialogue_task_dst", "l": "Dialogue state tracking (DST)", "hw": "GPU 4GB+", "tool": "TRADE, ConvBERT", "dev": "Microsoft (TRADE)" },
                                        { "id": "nlp_dialogue_task_policy", "l": "Dialogue policy (rule‑based, RL)", "tool": "Rasa, PyDial" },
                                        { "id": "nlp_dialogue_task_nlg", "l": "Natural language generation (NLG)", "hw": "GPU 4GB+", "tool": "T5, BART" }
                                    ]
                                },
                                {
                                    "id": "nlp_dialogue_open",
                                    "l": "Open‑domain conversation (chit‑chat)",
                                    "ch": [
                                        { "id": "nlp_dialogue_open_retrieval", "l": "Retrieval‑based (BlenderBot)", "hw": "GPU 8GB+", "tool": "ParlAI (Meta)", "dev": "Meta AI" },
                                        { "id": "nlp_dialogue_open_generative", "l": "Generative (seq2seq, LLMs)", "hw": "GPU 8GB+", "tool": "Hugging Face, ChatGPT API", "product": "ChatGPT, Claude" }
                                    ]
                                },
                                { "id": "nlp_dialogue_act", "l": "Dialogue act classification", "tool": "Switchboard, MRDA", "hw": "GPU 4GB+" },
                                { "id": "nlp_dialogue_response", "l": "Response selection & generation", "hw": "GPU 4GB+", "tool": "BERT‑Reranker, Poly‑Encoder" },
                                { "id": "nlp_dialogue_persona", "l": "Persona & emotion in dialogue", "tool": "Persona‑Chat, EmpatheticDialogues", "dev": "Pascal Fung (Persona‑Chat)" },
                                { "id": "nlp_dialogue_empathy", "l": "Empathetic & therapeutic chatbots", "product": "Woebot, Wysa", "dev": "Woebot Health" },
                                { "id": "nlp_dialogue_eval", "l": "Dialogue evaluation (BLEU, ROUGE, BERTScore, human)", "tool": "Hugging Face evaluate, USR", "dev": "Google (BLEU)" }
                            ]
                        },
                        {
                            "id": "nlp_tools",
                            "l": "NLP Libraries & Toolkits",
                            "ch": [
                                { "id": "nlp_tools_spacy", "l": "spaCy", "hw": "CPU/GPU", "tool": "spaCy", "dev": "Explosion AI (Matthew Honnibal)" },
                                { "id": "nlp_tools_nltk", "l": "NLTK", "hw": "CPU", "tool": "NLTK", "dev": "Steven Bird, Edward Loper" },
                                { "id": "nlp_tools_stanza", "l": "Stanza (Stanford NLP)", "hw": "CPU/GPU", "tool": "Stanza", "dev": "Stanford NLP" },
                                { "id": "nlp_tools_hf", "l": "Hugging Face Transformers", "hw": "CPU/GPU", "tool": "transformers, datasets", "dev": "Hugging Face" },
                                { "id": "nlp_tools_flair", "l": "Flair", "hw": "GPU", "tool": "Flair", "dev": "Zalando Research" },
                                { "id": "nlp_tools_rasa", "l": "Rasa (conversational AI)", "hw": "CPU/GPU", "product": "Rasa Open Source", "dev": "Rasa" },
                                { "id": "nlp_tools_langchain", "l": "LangChain (LLM orchestration)", "hw": "CPU/GPU", "tool": "LangChain", "dev": "Harrison Chase" },
                                { "id": "nlp_tools_llamaindex", "l": "LlamaIndex (data framework for LLMs)", "hw": "CPU/GPU", "tool": "LlamaIndex", "dev": "LlamaIndex" }
                            ]
                        }
                    ]
                },
                // ─────────────────────────────────────────────────────────
                // 6. COMPUTER VISION
                // ─────────────────────────────────────────────────────────
                {
                    "id": "cv",
                    "c": "cv",
                    "l": "Computer Vision",
                    "ch": [
                        {
                            "id": "cv_fund",
                            "l": "Image Fundamentals",
                            "ch": [
                                {
                                    "id": "cv_fund_repr",
                                    "l": "Digital image representation",
                                    "ch": [
                                        { "id": "cv_fund_pixels", "l": "Pixels, resolution, bit depth", "hw": "CPU", "tool": "Any image library" },
                                        { "id": "cv_fund_channels", "l": "Colour channels (grayscale, RGB)", "hw": "CPU" }
                                    ]
                                },
                                {
                                    "id": "cv_fund_color",
                                    "l": "Colour spaces",
                                    "ch": [
                                        { "id": "cv_fund_color_rgb", "l": "RGB, sRGB" },
                                        { "id": "cv_fund_color_hsv", "l": "HSV, HLS" },
                                        { "id": "cv_fund_color_lab", "l": "LAB, LUV" },
                                        { "id": "cv_fund_color_yuv", "l": "YUV, YCbCr" },
                                        { "id": "cv_fund_color_cmyk", "l": "CMYK (printing)" }
                                    ]
                                },
                                {
                                    "id": "cv_fund_filter",
                                    "l": "Image filtering",
                                    "ch": [
                                        { "id": "cv_fund_filter_gaussian", "l": "Gaussian blur", "hw": "CPU, GPU", "tool": "OpenCV, scikit‑image" },
                                        { "id": "cv_fund_filter_median", "l": "Median filter", "hw": "CPU" },
                                        { "id": "cv_fund_filter_bilateral", "l": "Bilateral filter", "hw": "CPU, GPU", "tool": "OpenCV" },
                                        { "id": "cv_fund_filter_sobel", "l": "Sobel edge detection", "hw": "CPU" },
                                        { "id": "cv_fund_filter_laplacian", "l": "Laplacian edge detection", "hw": "CPU" },
                                        { "id": "cv_fund_filter_canny", "l": "Canny edge detector", "hw": "CPU", "tool": "OpenCV", "dev": "John Canny" },
                                        { "id": "cv_fund_filter_gabor", "l": "Gabor filters (texture)", "hw": "CPU" }
                                    ]
                                },
                                {
                                    "id": "cv_fund_morph",
                                    "l": "Morphological operations",
                                    "ch": [
                                        { "id": "cv_fund_morph_erode", "l": "Erosion" },
                                        { "id": "cv_fund_morph_dilate", "l": "Dilation" },
                                        { "id": "cv_fund_morph_open", "l": "Opening (erosion + dilation)" },
                                        { "id": "cv_fund_morph_close", "l": "Closing (dilation + erosion)" },
                                        { "id": "cv_fund_morph_gradient", "l": "Morphological gradient" }
                                    ]
                                },
                                {
                                    "id": "cv_fund_hist",
                                    "l": "Histogram operations",
                                    "ch": [
                                        { "id": "cv_fund_hist_equal", "l": "Histogram equalisation" },
                                        { "id": "cv_fund_hist_adapt", "l": "CLAHE (adaptive equalisation)" }
                                    ]
                                },
                                {
                                    "id": "cv_fund_feat",
                                    "l": "Feature descriptors",
                                    "ch": [
                                        { "id": "cv_fund_feat_sift", "l": "SIFT (Scale‑Invariant Feature Transform)", "hw": "CPU", "tool": "OpenCV, VLFeat", "dev": "David Lowe (UBC)" },
                                        { "id": "cv_fund_feat_surf", "l": "SURF", "hw": "CPU", "tool": "OpenCV", "dev": "Herbert Bay (ETH Zurich)" },
                                        { "id": "cv_fund_feat_orb", "l": "ORB (Oriented FAST + Rotated BRIEF)", "hw": "CPU, embedded", "tool": "OpenCV", "dev": "Ethan Rublee (OpenCV)" },
                                        { "id": "cv_fund_feat_hog", "l": "HOG (Histogram of Oriented Gradients)", "hw": "CPU", "tool": "scikit‑image, OpenCV", "dev": "Navneet Dalal, Bill Triggs" },
                                        { "id": "cv_fund_feat_brisk", "l": "BRISK" },
                                        { "id": "cv_fund_feat_freak", "l": "FREAK" }
                                    ]
                                },
                                {
                                    "id": "cv_fund_products",
                                    "l": "Fundamentals libraries",
                                    "ch": [
                                        { "id": "cv_fund_opencv", "l": "OpenCV", "hw": "CPU, optional GPU (CUDA)", "tool": "OpenCV (C++/Python)", "product": "OpenCV library", "dev": "Intel, Willow Garage, OpenCV.org" },
                                        { "id": "cv_fund_pil", "l": "Pillow (PIL)", "hw": "CPU only", "tool": "Pillow", "dev": "Alex Clark & contributors" },
                                        { "id": "cv_fund_skimage", "l": "scikit‑image", "hw": "CPU", "tool": "scikit‑image", "dev": "scikit‑image community" }
                                    ]
                                }
                            ]
                        },
                        {
                            "id": "cv_class",
                            "l": "Image Classification",
                            "ch": [
                                {
                                    "id": "cv_class_arch",
                                    "l": "Classification architectures",
                                    "ch": [
                                        { "id": "cv_class_arch_alexnet", "l": "AlexNet", "hw": "NVIDIA GTX 580 (2012)", "tool": "Caffe, PyTorch", "dev": "Alex Krizhevsky, Ilya Sutskever, Geoffrey Hinton" },
                                        { "id": "cv_class_arch_vgg", "l": "VGG (16, 19)", "hw": "NVIDIA K40 (training)", "tool": "PyTorch, TensorFlow", "dev": "Oxford VGG (Simonyan & Zisserman)" },
                                        { "id": "cv_class_arch_resnet", "l": "ResNet (18, 34, 50, 101, 152)", "hw": "NVIDIA GTX 1080 Ti (training), 6GB VRAM (inference)", "tool": "PyTorch, TensorFlow", "dev": "Microsoft Research (He et al.)" },
                                        { "id": "cv_class_arch_inception", "l": "Inception (v1–v4, GoogLeNet)", "hw": "NVIDIA K80", "tool": "TensorFlow, PyTorch", "dev": "Google (Szegedy et al.)" },
                                        { "id": "cv_class_arch_mobilenet", "l": "MobileNet (v1, v2, v3)", "hw": "CPU, Edge TPU", "tool": "TensorFlow Lite", "dev": "Google (Howard et al.)" },
                                        { "id": "cv_class_arch_efficientnet", "l": "EfficientNet (B0–B7)", "hw": "NVIDIA V100 (training), 8GB VRAM (inference)", "tool": "TensorFlow, PyTorch", "dev": "Google Research (Tan & Le)" },
                                        { "id": "cv_class_arch_vit", "l": "Vision Transformer (ViT)", "hw": "NVIDIA A100 (40GB) for training, 16GB for inference", "tool": "Hugging Face Transformers", "dev": "Google Brain (Dosovitskiy et al.)" },
                                        { "id": "cv_class_arch_convnext", "l": "ConvNeXt", "hw": "NVIDIA RTX 3090 (24GB)", "tool": "PyTorch, timm", "dev": "Facebook AI (Liu et al.)" }
                                    ]
                                },
                                {
                                    "id": "cv_class_tasks",
                                    "l": "Classification tasks",
                                    "ch": [
                                        { "id": "cv_class_finegrained", "l": "Fine‑grained recognition (birds, dogs, cars)" },
                                        { "id": "cv_class_longtail", "l": "Long‑tail & imbalanced classification" },
                                        { "id": "cv_class_zeroshot", "l": "Zero‑shot & few‑shot classification" },
                                        { "id": "cv_class_openset", "l": "Open‑set recognition" }
                                    ]
                                },
                                {
                                    "id": "cv_class_data",
                                    "l": "Datasets & benchmarks",
                                    "ch": [
                                        { "id": "cv_class_imagenet", "l": "ImageNet (ILSVRC)", "hw": "Large‑scale GPU cluster", "tool": "PyTorch, TensorFlow", "dev": "Stanford, Princeton (Fei‑Fei Li et al.)" },
                                        { "id": "cv_class_cifar", "l": "CIFAR‑10 / CIFAR‑100" },
                                        { "id": "cv_class_caltech", "l": "Caltech‑101 / 256" }
                                    ]
                                },
                                {
                                    "id": "cv_class_products",
                                    "l": "Classification APIs",
                                    "ch": [
                                        { "id": "cv_class_gcv", "l": "Google Cloud Vision API", "hw": "Cloud (no local HW)", "product": "Cloud Vision API", "dev": "Google" },
                                        { "id": "cv_class_aws", "l": "AWS Rekognition", "hw": "Cloud API", "product": "Amazon Rekognition", "dev": "AWS" },
                                        { "id": "cv_class_azure", "l": "Azure Computer Vision", "hw": "Cloud API", "product": "Azure Computer Vision", "dev": "Microsoft" },
                                        { "id": "cv_class_clarifai", "l": "Clarifai", "hw": "Cloud", "product": "Clarifai", "dev": "Clarifai" }
                                    ]
                                }
                            ]
                        },
                        {
                            "id": "cv_det",
                            "l": "Object Detection",
                            "ch": [
                                {
                                    "id": "cv_det_twostage",
                                    "l": "Two‑stage detectors",
                                    "ch": [
                                        { "id": "cv_det_rcnn", "l": "R‑CNN", "hw": "CPU (slow), GPU optional", "tool": "Caffe", "dev": "Ross Girshick et al." },
                                        { "id": "cv_det_fastrcnn", "l": "Fast R‑CNN", "hw": "GPU 4GB+", "tool": "Caffe, PyTorch", "dev": "Ross Girshick" },
                                        { "id": "cv_det_fasterrcnn", "l": "Faster R‑CNN", "hw": "GPU 8GB+ VRAM", "tool": "Detectron2, MMDetection", "dev": "Microsoft Research (Ren et al.)" },
                                        { "id": "cv_det_maskrcnn", "l": "Mask R‑CNN (instance segmentation)", "hw": "GPU 8GB+ VRAM", "tool": "Detectron2, MMDetection", "dev": "Facebook AI (He et al.)" },
                                        { "id": "cv_det_fpn", "l": "Feature Pyramid Networks (FPN)", "hw": "GPU 8GB+", "tool": "Detectron2", "dev": "Facebook AI" }
                                    ]
                                },
                                {
                                    "id": "cv_det_onestage",
                                    "l": "One‑stage detectors",
                                    "ch": [
                                        { "id": "cv_det_yolo", "l": "YOLO (v1–v10)", "hw": "NVIDIA GTX 1060 6GB (inference), RTX 3090 (training)", "tool": "Ultralytics YOLO", "product": "YOLO (Ultralytics)", "dev": "Joseph Redmon, Glenn Jocher" },
                                        { "id": "cv_det_yolov3", "l": "YOLOv3", "hw": "GTX 1060", "tool": "Darknet, PyTorch", "dev": "Joseph Redmon, Ali Farhadi" },
                                        { "id": "cv_det_yolov5", "l": "YOLOv5 (Ultralytics)", "hw": "GTX 1060 6GB", "tool": "Ultralytics YOLO", "dev": "Glenn Jocher" },
                                        { "id": "cv_det_yolov8", "l": "YOLOv8 / YOLOv9 / YOLOv10", "hw": "RTX 3060 12GB", "tool": "Ultralytics YOLO", "dev": "Ultralytics" },
                                        { "id": "cv_det_ssd", "l": "SSD (Single Shot MultiBox Detector)", "hw": "GPU 4GB+", "tool": "Caffe, PyTorch", "dev": "Google (Liu et al.)" },
                                        { "id": "cv_det_retinanet", "l": "RetinaNet (focal loss)", "hw": "NVIDIA GTX 1080 Ti", "tool": "Detectron2", "dev": "Facebook AI (Lin et al.)" },
                                        { "id": "cv_det_fcos", "l": "FCOS (anchor‑free)", "hw": "GPU 8GB", "tool": "MMDetection", "dev": "Google Research (Tian et al.)" }
                                    ]
                                },
                                {
                                    "id": "cv_det_trans",
                                    "l": "Transformer‑based detection",
                                    "ch": [
                                        { "id": "cv_det_detr", "l": "DETR (Detection Transformer)", "hw": "NVIDIA V100 or A100 (training)", "tool": "Facebook Research (DETR)", "dev": "Facebook AI (Carion et al.)" },
                                        { "id": "cv_det_deformable_detr", "l": "Deformable DETR", "hw": "V100 (32GB)", "tool": "PyTorch", "dev": "SenseTime" },
                                        { "id": "cv_det_dino_det", "l": "DINO (detection with denoising)", "hw": "A100 (40GB)", "tool": "PyTorch", "dev": "IDEA‑CVR" }
                                    ]
                                },
                                { "id": "cv_det_3d", "l": "3D object detection (PointPillars, VoxelNet)", "hw": "NVIDIA Xavier/Orin", "tool": "OpenPCDet", "dev": "nuTonomy, Stanford" },
                                { "id": "cv_det_rotated", "l": "Oriented & rotated bounding boxes", "tool": "MMRotate", "dev": "OpenMMLab" },
                                {
                                    "id": "cv_det_products",
                                    "l": "Detection products & APIs",
                                    "ch": [
                                        { "id": "cv_det_google_vision", "l": "Google Cloud Vision Object Detection", "hw": "Cloud", "product": "Cloud Vision API", "dev": "Google" },
                                        { "id": "cv_det_aws", "l": "AWS Rekognition (object localisation)", "hw": "Cloud", "product": "Rekognition", "dev": "AWS" },
                                        { "id": "cv_det_azure", "l": "Azure Computer Vision (object detection)", "hw": "Cloud", "product": "Azure CV", "dev": "Microsoft" },
                                        { "id": "cv_det_ultralytics_hub", "l": "Ultralytics HUB (YOLO training/deployment)", "hw": "Cloud + local GPU", "product": "Ultralytics HUB", "dev": "Ultralytics" }
                                    ]
                                }
                            ]
                        },
                        {
                            "id": "cv_seg",
                            "l": "Image Segmentation",
                            "ch": [
                                {
                                    "id": "cv_seg_semantic",
                                    "l": "Semantic segmentation",
                                    "ch": [
                                        { "id": "cv_seg_fcn", "l": "FCN (Fully Convolutional Network)", "hw": "GPU 4GB+", "tool": "Caffe, PyTorch", "dev": "UC Berkeley (Long et al.)" },
                                        { "id": "cv_seg_unet", "l": "U‑Net (biomedical)", "hw": "GPU 6GB+ VRAM", "tool": "PyTorch, MONAI", "dev": "University of Freiburg (Ronneberger et al.)" },
                                        { "id": "cv_seg_deeplab", "l": "DeepLab (v1–v4, ASPP)", "hw": "NVIDIA GTX 1080 Ti", "tool": "TensorFlow (DeepLab), PyTorch", "dev": "Google Research (Chen et al.)" },
                                        { "id": "cv_seg_segformer", "l": "SegFormer", "hw": "NVIDIA RTX 2080 Ti", "tool": "MMSegmentation", "dev": "NVIDIA (Xie et al.)" }
                                    ]
                                },
                                {
                                    "id": "cv_seg_instance",
                                    "l": "Instance segmentation",
                                    "ch": [
                                        { "id": "cv_seg_maskrcnn", "l": "Mask R‑CNN", "hw": "GPU 8GB+ VRAM", "tool": "Detectron2, MMDetection", "dev": "Facebook AI (He et al.)" },
                                        { "id": "cv_seg_solo", "l": "SOLOv2", "hw": "GPU 8GB", "tool": "MMDetection", "dev": "Nanjing University (Wang et al.)" },
                                        { "id": "cv_seg_queryinst", "l": "QueryInst", "hw": "V100", "tool": "PyTorch", "dev": "Microsoft Research Asia" }
                                    ]
                                },
                                { "id": "cv_seg_panoptic", "l": "Panoptic segmentation (stuff + things)", "tool": "Detectron2", "dev": "Facebook AI" },
                                {
                                    "id": "cv_seg_prompt",
                                    "l": "Interactive & promptable segmentation",
                                    "ch": [
                                        { "id": "cv_seg_sam", "l": "SAM (Segment Anything Model)", "hw": "NVIDIA V100 (32GB) for inference, A100 for training", "tool": "segment‑anything (PyTorch)", "product": "SAM (Meta AI)", "dev": "Meta AI Research (Kirillov et al.)" },
                                        { "id": "cv_seg_sam2", "l": "SAM 2 (video segmentation)", "hw": "NVIDIA A100 (40GB)", "tool": "SAM 2 (PyTorch)", "product": "SAM 2 (Meta)", "dev": "Meta AI" },
                                        { "id": "cv_seg_mobile_sam", "l": "MobileSAM", "hw": "CPU, mobile GPU", "tool": "MobileSAM (PyTorch)", "dev": "Chong Zhou" },
                                        { "id": "cv_seg_click", "l": "Click‑based interactive segmentation (f-BRS, SimpleClick)", "hw": "GPU 6GB", "tool": "PyTorch" }
                                    ]
                                },
                                { "id": "cv_seg_medical", "l": "Medical image segmentation (nnU‑Net, MONAI)", "hw": "GPU 8GB+", "tool": "MONAI, nnU‑Net", "dev": "German Cancer Research Center (Isensee et al.)" },
                                {
                                    "id": "cv_seg_products",
                                    "l": "Segmentation products",
                                    "ch": [
                                        { "id": "cv_seg_encord", "l": "Encord (annotation with SAM)", "hw": "Cloud", "product": "Encord", "dev": "Encord" },
                                        { "id": "cv_seg_labelbox", "l": "Labelbox (segmentation tools)", "hw": "Cloud", "product": "Labelbox", "dev": "Labelbox" }
                                    ]
                                }
                            ]
                        },
                        {
                            "id": "cv_3d",
                            "l": "3D Vision",
                            "ch": [
                                {
                                    "id": "cv_3d_depth",
                                    "l": "Depth estimation",
                                    "ch": [
                                        { "id": "cv_3d_stereo", "l": "Stereo depth (SGM, ELAS)", "hw": "CPU, GPU optional", "tool": "OpenCV, LIBELAS", "dev": "Hirschmuller (SGM)" },
                                        { "id": "cv_3d_monodepth", "l": "Monocular depth (MiDaS, DPT)", "hw": "NVIDIA GTX 1060 (inference)", "tool": "MiDaS (PyTorch)", "dev": "Intel Labs (Ranftl et al.)" }
                                    ]
                                },
                                {
                                    "id": "cv_3d_recon",
                                    "l": "3D reconstruction",
                                    "ch": [
                                        {
                                            "id": "cv_3d_sfm", "l": "Structure from Motion (SfM)", "ch": [
                                                { "id": "cv_3d_colmap", "l": "COLMAP", "hw": "CPU, GPU (CUDA)", "tool": "COLMAP", "dev": "Johannes Schönberger" },
                                                { "id": "cv_3d_openmvg", "l": "OpenMVG", "tool": "OpenMVG", "dev": "Pierre Moulon" }
                                            ]
                                        },
                                        { "id": "cv_3d_mvs", "l": "Multi‑View Stereo (MVS)", "tool": "OpenMVS, COLMAP MVS" },
                                        { "id": "cv_3d_tsdf", "l": "TSDF fusion (KinectFusion)", "hw": "GPU (CUDA)", "tool": "Open3D, PCL", "dev": "Microsoft (Newcombe et al.)" }
                                    ]
                                },
                                {
                                    "id": "cv_3d_slam",
                                    "l": "SLAM (Simultaneous Localisation and Mapping)",
                                    "ch": [
                                        {
                                            "id": "cv_3d_slam_visual", "l": "Visual SLAM", "ch": [
                                                { "id": "cv_3d_slam_orb", "l": "ORB‑SLAM (v2, v3)", "hw": "CPU (Intel i7), optional GPU", "tool": "ORB‑SLAM3 (C++)", "dev": "Zaragoza University" },
                                                { "id": "cv_3d_slam_dso", "l": "DSO (Direct Sparse Odometry)", "dev": "Jakob Engel", "hw": "CPU" },
                                                { "id": "cv_3d_slam_lsd", "l": "LSD‑SLAM", "dev": "TU Munich" }
                                            ]
                                        },
                                        {
                                            "id": "cv_3d_slam_lidar", "l": "LiDAR SLAM", "ch": [
                                                { "id": "cv_3d_slam_loam", "l": "LOAM / LeGO‑LOAM", "hw": "CPU, LiDAR sensor", "tool": "LOAM (ROS)", "dev": "T. Shan, J. Zhang" },
                                                { "id": "cv_3d_slam_hloam", "l": "HLOAM (high‑level)" }
                                            ]
                                        },
                                        { "id": "cv_3d_slam_visinertial", "l": "Visual‑inertial SLAM", "tool": "VINS‑Mono, OKVIS", "dev": "HKUST, ETH Zurich" }
                                    ]
                                },
                                {
                                    "id": "cv_3d_nerf",
                                    "l": "Neural Radiance Fields (NeRF)",
                                    "ch": [
                                        { "id": "cv_3d_nerf_orig", "l": "Original NeRF", "hw": "NVIDIA RTX 3090 (24GB)", "tool": "Nerfstudio, PyTorch", "dev": "UC Berkeley, Google (Mildenhall et al.)" },
                                        { "id": "cv_3d_nerf_instant", "l": "Instant NGP (NVIDIA)", "hw": "NVIDIA RTX 3080 or better", "tool": "Instant NGP (CUDA)", "product": "Instant NeRF", "dev": "NVIDIA (Müller et al.)" },
                                        { "id": "cv_3d_nerf_zip", "l": "Zip‑NeRF, Nerfacto", "hw": "RTX 3090", "tool": "Nerfstudio", "dev": "Nerfstudio team" }
                                    ]
                                },
                                { "id": "cv_3d_gaussian", "l": "3D Gaussian Splatting", "hw": "NVIDIA RTX 3090 (24GB)", "tool": "diff‑gaussian‑rasterization", "dev": "INRIA, Max Planck (Kerbl et al.)" },
                                {
                                    "id": "cv_3d_pointcloud",
                                    "l": "Point cloud processing",
                                    "ch": [
                                        { "id": "cv_3d_pointnet", "l": "PointNet & PointNet++", "hw": "GPU 6GB+", "tool": "PyTorch", "dev": "Stanford (Qi et al.)" },
                                        { "id": "cv_3d_voxelnet", "l": "VoxelNet", "hw": "NVIDIA Xavier", "tool": "OpenPCDet", "dev": "nuTonomy" },
                                        { "id": "cv_3d_pcl", "l": "Point Cloud Library (PCL)", "hw": "CPU", "tool": "PCL", "dev": "Open Perception" }
                                    ]
                                },
                                {
                                    "id": "cv_3d_products",
                                    "l": "3D products",
                                    "ch": [
                                        { "id": "cv_3d_luma", "l": "Luma AI (NeRF capture)", "hw": "Cloud / iPhone", "product": "Luma AI", "dev": "Luma AI" },
                                        { "id": "cv_3d_polycam", "l": "Polycam (LiDAR + NeRF)", "hw": "iPad Pro (LiDAR)", "product": "Polycam", "dev": "Polycam" },
                                        { "id": "cv_3d_metashape", "l": "Agisoft Metashape (SfM)", "hw": "CPU + GPU", "product": "Metashape", "dev": "Agisoft" }
                                    ]
                                }
                            ]
                        },
                        {
                            "id": "cv_video",
                            "l": "Video Understanding",
                            "ch": [
                                {
                                    "id": "cv_video_action",
                                    "l": "Action recognition",
                                    "ch": [
                                        { "id": "cv_video_c3d", "l": "C3D (3D ConvNet)", "hw": "GPU 8GB+", "tool": "Caffe", "dev": "Facebook AI" },
                                        { "id": "cv_video_i3d", "l": "I3D (Inflated 3D)", "hw": "NVIDIA V100 (multi‑GPU)", "tool": "PyTorch, TensorFlow", "dev": "DeepMind (Carreira & Zisserman)" },
                                        { "id": "cv_video_slowfast", "l": "SlowFast networks", "hw": "NVIDIA V100 (4x GPUs)", "tool": "PyTorchVideo", "dev": "Facebook AI (Feichtenhofer et al.)" },
                                        { "id": "cv_video_timesformer", "l": "TimeSformer (video transformer)", "hw": "NVIDIA A100 (40GB)", "tool": "PyTorch, Hugging Face", "dev": "Facebook AI (Bertasius et al.)" },
                                        { "id": "cv_video_videomae", "l": "VideoMAE", "hw": "A100", "tool": "PyTorch", "dev": "MPI, HKU" }
                                    ]
                                },
                                {
                                    "id": "cv_video_track",
                                    "l": "Object tracking",
                                    "ch": [
                                        { "id": "cv_video_kalman", "l": "Kalman filter tracking", "hw": "CPU", "tool": "OpenCV, FilterPy" },
                                        { "id": "cv_video_sort", "l": "SORT (Simple Online Realtime Tracking)", "hw": "CPU, GPU optional", "tool": "SORT (Python)", "dev": "Alex Bewley" },
                                        { "id": "cv_video_deepsort", "l": "DeepSORT", "hw": "GPU (GTX 1060 for detection)", "tool": "Deep SORT (YOLO + SORT)", "dev": "Nicolai Wojke" },
                                        { "id": "cv_video_botsort", "l": "BoT‑SORT", "hw": "GPU 8GB", "tool": "BoxMOT", "dev": "Nir Aharon" },
                                        { "id": "cv_video_transformer_track", "l": "Transformer trackers (TransTrack, MOTR)", "hw": "V100", "tool": "PyTorch" }
                                    ]
                                },
                                {
                                    "id": "cv_video_flow",
                                    "l": "Optical flow",
                                    "ch": [
                                        { "id": "cv_video_flownet", "l": "FlowNet", "hw": "GPU 6GB+", "tool": "PyTorch", "dev": "University of Freiburg (Dosovitskiy et al.)" },
                                        { "id": "cv_video_raft", "l": "RAFT (Recurrent All‑Pairs Field Transforms)", "hw": "NVIDIA GTX 1080 Ti", "tool": "RAFT (PyTorch)", "dev": "Princeton, ETH Zurich" },
                                        { "id": "cv_video_gmflow", "l": "GMFlow", "hw": "RTX 2080 Ti", "tool": "GMFlow (PyTorch)", "dev": "Tsinghua University" }
                                    ]
                                },
                                { "id": "cv_video_vos", "l": "Video object segmentation (DAVIS, SAM‑Track, Cutie)", "hw": "GPU 8GB", "tool": "PyTorch", "dev": "University of Oxford, Meta" },
                                { "id": "cv_video_tal", "l": "Temporal action localisation (ActivityNet, TALNet)", "hw": "GPU 8GB", "tool": "PyTorch" },
                                { "id": "cv_video_vqa", "l": "Video question answering (NExT‑QA, Video‑LLaMA)", "hw": "A100 (40GB)", "tool": "LLaVA, Hugging Face" },
                                {
                                    "id": "cv_video_gen",
                                    "l": "Video generation",
                                    "ch": [
                                        { "id": "cv_video_sora", "l": "Sora (OpenAI)", "hw": "Large‑scale cloud clusters", "product": "Sora", "dev": "OpenAI" },
                                        { "id": "cv_video_runway", "l": "Runway Gen‑2 / Gen‑3", "hw": "Cloud GPU (NVIDIA A100)", "product": "Runway ML", "dev": "Runway AI" },
                                        { "id": "cv_video_pika", "l": "Pika Labs", "hw": "Cloud", "product": "Pika", "dev": "Pika Labs" },
                                        { "id": "cv_video_kling", "l": "Kling (快手)", "hw": "Cloud", "product": "Kling", "dev": "Kuaishou Technology" },
                                        { "id": "cv_video_veo", "l": "Veo (Google DeepMind)", "hw": "Cloud", "product": "Veo", "dev": "Google DeepMind" }
                                    ]
                                }
                            ]
                        },
                        {
                            "id": "cv_vlm",
                            "l": "Vision‑Language Models (VLM)",
                            "ch": [
                                {
                                    "id": "cv_vlm_contrastive",
                                    "l": "Contrastive language‑image pretraining",
                                    "ch": [
                                        { "id": "cv_vlm_clip", "l": "CLIP (OpenAI)", "hw": "NVIDIA V100 (training), 12GB for inference", "tool": "OpenAI CLIP (PyTorch)", "product": "CLIP", "dev": "OpenAI (Radford et al.)" },
                                        { "id": "cv_vlm_align", "l": "ALIGN (Google)", "hw": "Cloud TPU v3", "tool": "TensorFlow", "dev": "Google Research" },
                                        { "id": "cv_vlm_florence", "l": "Florence (Microsoft)", "hw": "NVIDIA A100", "tool": "PyTorch", "dev": "Microsoft" }
                                    ]
                                },
                                {
                                    "id": "cv_vlm_grounding",
                                    "l": "Visual grounding & referring expressions",
                                    "ch": [
                                        { "id": "cv_vlm_owlv2", "l": "OWL‑ViT (open‑vocabulary detection)", "hw": "V100", "tool": "Hugging Face Transformers", "dev": "Google Research" },
                                        { "id": "cv_vlm_grounding_dino", "l": "Grounding DINO", "hw": "RTX 3090", "tool": "Grounding DINO (PyTorch)", "dev": "IDEA‑CVR" }
                                    ]
                                },
                                {
                                    "id": "cv_vlm_caption",
                                    "l": "Image captioning",
                                    "ch": [
                                        { "id": "cv_vlm_blip", "l": "BLIP / BLIP‑2", "hw": "A100 (40GB)", "tool": "Hugging Face Transformers", "dev": "Salesforce Research" },
                                        { "id": "cv_vlm_coca", "l": "CoCa (Contrastive Captioner)", "hw": "TPU v4", "tool": "JAX", "dev": "Google Research" }
                                    ]
                                },
                                {
                                    "id": "cv_vlm_multimodal_llm",
                                    "l": "Multimodal LLMs",
                                    "ch": [
                                        { "id": "cv_vlm_gpt4v", "l": "GPT‑4V / GPT‑4o", "hw": "Cloud API", "product": "GPT‑4 Vision", "dev": "OpenAI" },
                                        { "id": "cv_vlm_gemini", "l": "Gemini (1.0, 1.5, 2.0)", "hw": "Cloud API", "product": "Gemini Pro Vision", "dev": "Google DeepMind" },
                                        { "id": "cv_vlm_claude3", "l": "Claude 3 Vision", "hw": "Cloud API", "product": "Claude 3", "dev": "Anthropic" },
                                        { "id": "cv_vlm_llava", "l": "LLaVA (Large Language and Vision Assistant)", "hw": "NVIDIA A100 (40GB) for fine‑tuning", "tool": "LLaVA (Hugging Face)", "dev": "University of Wisconsin, Microsoft" },
                                        { "id": "cv_vlm_internvl", "l": "InternVL", "hw": "NVIDIA A100 (80GB)", "tool": "InternVL (PyTorch)", "dev": "Shanghai AI Lab" },
                                        { "id": "cv_vlm_qwen_vl", "l": "Qwen‑VL (Alibaba)", "hw": "Cloud, A100", "product": "Qwen Vision", "dev": "Alibaba Cloud" }
                                    ]
                                },
                                { "id": "cv_vlm_instruction", "l": "Visual instruction tuning (LVIS‑Instruct, LLaVA‑Instruct)", "hw": "A100", "tool": "PyTorch", "dev": "UC Davis, Microsoft" }
                            ]
                        },
                        {
                            "id": "cv_gen",
                            "l": "Generative Image AI",
                            "ch": [
                                {
                                    "id": "cv_gen_diff",
                                    "l": "Diffusion models (text‑to‑image)",
                                    "ch": [
                                        { "id": "cv_gen_sd", "l": "Stable Diffusion (1.5, 2.1)", "hw": "NVIDIA RTX 3060 (12GB) for inference, A100 for training", "tool": "Diffusers (Hugging Face), ComfyUI", "product": "Stable Diffusion", "dev": "Stability AI, Runway ML, CompVis" },
                                        { "id": "cv_gen_sdxl", "l": "Stable Diffusion XL (SDXL)", "hw": "NVIDIA RTX 3090 (24GB)", "tool": "Diffusers", "product": "SDXL", "dev": "Stability AI" },
                                        { "id": "cv_gen_sd3", "l": "Stable Diffusion 3", "hw": "NVIDIA A100 (40GB)", "tool": "Diffusers", "product": "SD3", "dev": "Stability AI" },
                                        { "id": "cv_gen_flux", "l": "Flux (Black Forest Labs)", "hw": "NVIDIA RTX 4090 (24GB)", "tool": "Flux (diffusion)", "product": "Flux", "dev": "Black Forest Labs" },
                                        { "id": "cv_gen_dalle3", "l": "DALL‑E 3", "hw": "Cloud (OpenAI)", "product": "DALL‑E 3", "dev": "OpenAI" },
                                        { "id": "cv_gen_midjourney", "l": "Midjourney (v6)", "hw": "Cloud (Discord bot)", "product": "Midjourney", "dev": "Midjourney Inc." },
                                        { "id": "cv_gen_firefly", "l": "Adobe Firefly", "hw": "Cloud", "product": "Adobe Firefly", "dev": "Adobe" },
                                        { "id": "cv_gen_imagen", "l": "Imagen (Google)", "hw": "Cloud TPU", "product": "Imagen", "dev": "Google Research" }
                                    ]
                                },
                                {
                                    "id": "cv_gen_edit",
                                    "l": "Image editing & inpainting",
                                    "ch": [
                                        { "id": "cv_gen_inpaint", "l": "Inpainting (SD, LaMa)", "hw": "GPU 8GB+", "tool": "Diffusers, LaMa", "dev": "Stability AI, Samsung" },
                                        { "id": "cv_gen_outpaint", "l": "Outpainting (DALL‑E, Photoshop)", "hw": "Cloud", "product": "DALL‑E, Photoshop AI", "dev": "OpenAI, Adobe" }
                                    ]
                                },
                                {
                                    "id": "cv_gen_sr",
                                    "l": "Super‑resolution",
                                    "ch": [
                                        { "id": "cv_gen_esrgan", "l": "ESRGAN / Real‑ESRGAN", "hw": "NVIDIA GTX 1080 Ti", "tool": "Real‑ESRGAN (PyTorch)", "dev": "Xintao Wang et al." },
                                        { "id": "cv_gen_swinir", "l": "SwinIR", "hw": "NVIDIA RTX 2070", "tool": "SwinIR (PyTorch)", "dev": "Jingyun Liang et al." },
                                        { "id": "cv_gen_waifu2x", "l": "Waifu2x (anime)", "hw": "CPU/GPU", "tool": "Waifu2x", "dev": "nagadomi" }
                                    ]
                                },
                                { "id": "cv_gen_style", "l": "Style transfer (AdaIN, CycleGAN, Neural Style Transfer)", "hw": "GPU 6GB", "tool": "PyTorch, TensorFlow", "dev": "Leon Gatys (NST), Jun‑Yan Zhu (CycleGAN)" },
                                { "id": "cv_gen_i2i", "l": "Image‑to‑image translation (Pix2Pix, CycleGAN, CUT)", "hw": "GPU 8GB", "tool": "PyTorch", "dev": "UC Berkeley (Isola et al., Zhu et al.)" },
                                {
                                    "id": "cv_gen_deepfake", "l": "Deepfakes – face swap & reenactment", "ch": [
                                        { "id": "cv_gen_deepfacelab", "l": "DeepFaceLab", "hw": "NVIDIA RTX 2080 Ti (11GB)", "tool": "DeepFaceLab", "dev": "Ivan Perov (community)" },
                                        { "id": "cv_gen_faceswap", "l": "Faceswap (faceswap.dev)", "hw": "GPU 8GB", "tool": "Faceswap", "dev": "faceswap.dev team" }
                                    ]
                                },
                                { "id": "cv_gen_3daware", "l": "3D‑aware generation (EG3D, DreamFusion)", "hw": "A100 (40GB)", "tool": "PyTorch", "dev": "NVIDIA, Google Research" }
                            ]
                        },
                        {
                            "id": "cv_domains",
                            "l": "Specialised CV Domains",
                            "ch": [
                                {
                                    "id": "cv_domains_medical",
                                    "l": "Medical imaging",
                                    "ch": [
                                        { "id": "cv_medical_monai", "l": "MONAI (medical AI framework)", "hw": "NVIDIA GPU (6GB+ VRAM)", "tool": "MONAI (PyTorch)", "dev": "MONAI Consortium" },
                                        { "id": "cv_medical_nnunet", "l": "nnU‑Net (self‑configuring)", "hw": "GPU 8GB+", "tool": "nnU‑Net (PyTorch)", "dev": "German Cancer Research Center" },
                                        { "id": "cv_medical_aidoc", "l": "Aidoc (radiology AI)", "hw": "Cloud / hospital GPU servers", "product": "Aidoc", "dev": "Aidoc Medical" },
                                        { "id": "cv_medical_vizai", "l": "Viz.ai (stroke detection)", "hw": "Cloud", "product": "Viz.ai", "dev": "Viz.ai" },
                                        { "id": "cv_medical_butterfly", "l": "Butterfly Network (ultrasound AI)", "hw": "Mobile GPU", "product": "Butterfly iQ", "dev": "Butterfly Network" }
                                    ]
                                },
                                {
                                    "id": "cv_domains_ocr",
                                    "l": "OCR & document analysis",
                                    "ch": [
                                        { "id": "cv_ocr_tesseract", "l": "Tesseract OCR", "hw": "CPU only", "tool": "Tesseract (C++)", "dev": "Google (originally HP)" },
                                        { "id": "cv_ocr_easyocr", "l": "EasyOCR", "hw": "CPU, GPU optional", "tool": "EasyOCR (PyTorch)", "dev": "Jaided AI" },
                                        { "id": "cv_ocr_aws_textract", "l": "AWS Textract", "hw": "Cloud API", "product": "Amazon Textract", "dev": "AWS" },
                                        { "id": "cv_ocr_google_docai", "l": "Google Document AI", "hw": "Cloud API", "product": "Document AI", "dev": "Google" },
                                        { "id": "cv_ocr_azure_form", "l": "Azure Form Recognizer", "hw": "Cloud API", "product": "Form Recognizer", "dev": "Microsoft" },
                                        { "id": "cv_ocr_layoutlm", "l": "LayoutLM (document understanding)", "hw": "GPU 8GB", "tool": "Hugging Face", "dev": "Microsoft" }
                                    ]
                                },
                                {
                                    "id": "cv_domains_face",
                                    "l": "Face recognition & analysis",
                                    "ch": [
                                        { "id": "cv_face_facenet", "l": "FaceNet (Google)", "hw": "GPU 8GB VRAM", "tool": "FaceNet (TensorFlow)", "dev": "Google (Schroff et al.)" },
                                        { "id": "cv_face_insightface", "l": "InsightFace", "hw": "GPU (GTX 1060+)", "tool": "InsightFace (Python)", "dev": "InsightFace contributors" },
                                        { "id": "cv_face_arcface", "l": "ArcFace", "hw": "GPU (GTX 1080 Ti)", "tool": "PyTorch, MXNet", "dev": "Imperial College (Deng et al.)" },
                                        { "id": "cv_face_retinaface", "l": "RetinaFace (face detection)", "hw": "GPU 6GB", "tool": "PyTorch", "dev": "InsightFace" },
                                        {
                                            "id": "cv_face_products", "l": "Face products", "ch": [
                                                { "id": "cv_face_aws", "l": "AWS Rekognition (face)", "hw": "Cloud", "product": "Rekognition", "dev": "AWS" },
                                                { "id": "cv_face_azure", "l": "Azure Face API", "hw": "Cloud", "product": "Face API", "dev": "Microsoft" },
                                                { "id": "cv_face_facepp", "l": "Face++ (Megvii)", "hw": "Cloud", "product": "Face++", "dev": "Megvii" }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "id": "cv_domains_pose",
                                    "l": "Pose estimation",
                                    "ch": [
                                        { "id": "cv_pose_openpose", "l": "OpenPose", "hw": "GPU (GTX 1070+)", "tool": "OpenPose (C++/Python)", "dev": "CMU (Cao et al.)" },
                                        { "id": "cv_pose_mediapipe", "l": "MediaPipe Pose (Google)", "hw": "CPU or mobile GPU", "tool": "MediaPipe", "product": "MediaPipe", "dev": "Google" },
                                        { "id": "cv_pose_movenet", "l": "MoveNet (Google)", "hw": "CPU, Edge TPU", "tool": "TensorFlow Lite", "dev": "Google" },
                                        { "id": "cv_pose_hrnet", "l": "HRNet (high‑resolution)", "hw": "GPU 8GB", "tool": "MMPose", "dev": "Microsoft Research Asia" },
                                        { "id": "cv_pose_vitpose", "l": "ViTPose", "hw": "V100", "tool": "MMPose", "dev": "SenseTime" }
                                    ]
                                },
                                {
                                    "id": "cv_domains_av",
                                    "l": "Autonomous driving perception",
                                    "ch": [
                                        { "id": "cv_av_pointpillars", "l": "PointPillars (3D detection)", "hw": "NVIDIA Xavier, Orin", "tool": "PointPillars (PyTorch)", "dev": "nuTonomy" },
                                        { "id": "cv_av_centerpoint", "l": "CenterPoint", "hw": "NVIDIA Orin", "tool": "OpenPCDet", "dev": "TuSimple" },
                                        { "id": "cv_av_tesla", "l": "Tesla Vision (HydraNet)", "hw": "Tesla FSD chip", "product": "Tesla Autopilot", "dev": "Tesla" },
                                        { "id": "cv_av_waymo", "l": "Waymo Perception", "hw": "Waymo custom hardware", "product": "Waymo Driver", "dev": "Waymo" },
                                        { "id": "cv_av_mobileye", "l": "Mobileye EyeQ", "hw": "EyeQ SoC", "product": "Mobileye SuperVision", "dev": "Intel (Mobileye)" }
                                    ]
                                },
                                {
                                    "id": "cv_domains_satellite",
                                    "l": "Satellite & remote sensing",
                                    "ch": [
                                        { "id": "cv_sat_planet", "l": "Planet Labs (satellite imagery)", "hw": "Cloud", "product": "Planet", "dev": "Planet Labs" },
                                        { "id": "cv_sat_descartes", "l": "Descartes Labs (geospatial AI)", "hw": "Cloud", "product": "Descartes Labs", "dev": "Descartes Labs" },
                                        { "id": "cv_sat_picterra", "l": "Picterra (drone/satellite detection)", "hw": "Cloud", "product": "Picterra", "dev": "Picterra" }
                                    ]
                                },
                                {
                                    "id": "cv_domains_industrial",
                                    "l": "Industrial inspection",
                                    "ch": [
                                        { "id": "cv_industrial_cognex", "l": "Cognex (machine vision)", "hw": "Industrial cameras", "product": "Cognex Vision", "dev": "Cognex" },
                                        { "id": "cv_industrial_landingai", "l": "Landing AI (defect detection)", "hw": "Cloud + edge", "product": "LandingLens", "dev": "Landing AI (Andrew Ng)" }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                // ─────────────────────────────────────────────────────────
                // 7. ROBOTICS & EMBODIED AI
                // ─────────────────────────────────────────────────────────
                {
                    "id": "rob",
                    "c": "rob",
                    "l": "Robotics & Embodied AI",
                    "ch": [
                        {
                            "id": "rob_perc",
                            "l": "Robot Perception",
                            "ch": [
                                {
                                    "id": "rob_perc_sensors",
                                    "l": "Sensor types",
                                    "ch": [
                                        { "id": "rob_perc_sensors_rgb", "l": "RGB / depth cameras", "hw": "Intel RealSense, OAK-D", "product": "RealSense (Intel)", "dev": "Intel" },
                                        { "id": "rob_perc_sensors_lidar", "l": "LiDAR (2D/3D)", "product": "Velodyne, Ouster, Hesai", "dev": "Velodyne Lidar, Ouster", "hw": "Velodyne VLP-16, Ouster OS1" },
                                        { "id": "rob_perc_sensors_imu", "l": "IMU (accelerometer, gyroscope)", "product": "Bosch BMX160, ADIS16470", "dev": "Bosch, Analog Devices" },
                                        { "id": "rob_perc_sensors_tactile", "l": "Tactile & force sensors", "product": "SynTouch BioTac, Robotiq FT300", "dev": "SynTouch, Robotiq" }
                                    ]
                                },
                                {
                                    "id": "rob_perc_fusion",
                                    "l": "Sensor fusion",
                                    "ch": [
                                        { "id": "rob_perc_fusion_kalman", "l": "Kalman filter (EKF, UKF)", "tool": "FilterPy, ROS robot_localization", "hw": "CPU (any)" },
                                        { "id": "rob_perc_fusion_particle", "l": "Particle filter", "tool": "ROS amcl", "dev": "ROS community" }
                                    ]
                                },
                                {
                                    "id": "rob_perc_slam",
                                    "l": "SLAM (Simultaneous Localisation and Mapping)",
                                    "ch": [
                                        {
                                            "id": "rob_perc_slam_visual", "l": "Visual SLAM", "ch": [
                                                { "id": "rob_perc_slam_orb", "l": "ORB‑SLAM (v2, v3)", "tool": "ORB‑SLAM3 (C++)", "dev": "Zaragoza University", "hw": "CPU, optional GPU" },
                                                { "id": "rob_perc_slam_dso", "l": "DSO (Direct Sparse Odometry)", "dev": "Jakob Engel", "hw": "CPU" }
                                            ]
                                        },
                                        {
                                            "id": "rob_perc_slam_lidar", "l": "LiDAR SLAM", "ch": [
                                                { "id": "rob_perc_slam_loam", "l": "LOAM / LeGO‑LOAM", "tool": "LOAM", "dev": "T. Shan, J. Zhang", "hw": "CPU, LiDAR sensor" }
                                            ]
                                        },
                                        { "id": "rob_perc_slam_visinertial", "l": "Visual‑inertial SLAM", "tool": "VINS‑Mono", "dev": "HKUST Aerial Robotics Group" }
                                    ]
                                },
                                { "id": "rob_perc_affordance", "l": "Affordance detection", "tool": "AffordanceNet, PyTorch", "hw": "GPU (NVIDIA GTX 1060+)" }
                            ]
                        },
                        {
                            "id": "rob_plan",
                            "l": "Robot Planning & Control",
                            "ch": [
                                {
                                    "id": "rob_plan_path",
                                    "l": "Path planning",
                                    "ch": [
                                        { "id": "rob_plan_path_astar", "l": "A* / Dijkstra", "tool": "OMPL, ROS nav_core", "hw": "CPU" },
                                        { "id": "rob_plan_path_rrt", "l": "RRT / RRT*", "tool": "OMPL (RRTConnect)", "hw": "CPU" },
                                        { "id": "rob_plan_path_prm", "l": "Probabilistic Roadmaps (PRM)", "tool": "OMPL" }
                                    ]
                                },
                                {
                                    "id": "rob_plan_control",
                                    "l": "Control theory",
                                    "ch": [
                                        { "id": "rob_plan_control_pid", "l": "PID control", "tool": "ROS control, Arduino PID", "hw": "Microcontroller (STM32, Arduino)" },
                                        { "id": "rob_plan_control_mpc", "l": "Model Predictive Control (MPC)", "tool": "ACADO, CasADi", "hw": "CPU, real‑time capable" },
                                        { "id": "rob_plan_control_impedance", "l": "Impedance / admittance control", "tool": "Franka Control Interface", "hw": "Franka Emika Panda robot" }
                                    ]
                                }
                            ]
                        },
                        {
                            "id": "rob_manip",
                            "l": "Manipulation & Grasping",
                            "ch": [
                                { "id": "rob_manip_grasp", "l": "Analytical grasp planning", "tool": "GraspIt!", "dev": "Columbia University" },
                                {
                                    "id": "rob_manip_learngrasp", "l": "Learning‑based grasping", "ch": [
                                        { "id": "rob_manip_learngrasp_ggcnn", "l": "GG‑CNN (grasp quality)", "tool": "PyTorch, ROS", "hw": "NVIDIA GTX 1060+", "dev": "University of Lincoln" },
                                        { "id": "rob_manip_learngrasp_gqn", "l": "GQN (Google GraspNet)", "dev": "Google Robotics", "hw": "Cloud TPU" }
                                    ]
                                },
                                { "id": "rob_manip_dexterous", "l": "Dexterous hand manipulation", "product": "Allegro Hand, Shadow Hand", "dev": "Wonik Robotics, Shadow Robot", "hw": "Real robot + GPU for RL" },
                                { "id": "rob_manip_sim2real", "l": "Sim‑to‑real transfer", "tool": "GraspIt!, PyBullet, Isaac Gym", "hw": "NVIDIA GPU (simulation)" }
                            ]
                        },
                        {
                            "id": "rob_mobile",
                            "l": "Mobile & Legged Robots",
                            "ch": [
                                { "id": "rob_mobile_wheeled", "l": "Wheeled robots", "product": "Clearpath Jackal, TurtleBot4", "dev": "Clearpath Robotics, Open Robotics", "hw": "Intel NUC, LiDAR, camera" },
                                { "id": "rob_mobile_quadruped", "l": "Quadruped robots", "product": "Boston Dynamics Spot, ANYmal C", "dev": "Boston Dynamics, ANYbotics", "hw": "On‑board GPU (NVIDIA Jetson), LiDAR" },
                                { "id": "rob_mobile_bipedal", "l": "Bipedal / humanoid", "product": "Atlas (Boston Dynamics), Digit (Agility Robotics)", "dev": "Boston Dynamics, Agility Robotics", "hw": "High‑power actuators, GPU" },
                                { "id": "rob_mobile_aerial", "l": "Drones / UAVs", "product": "DJI Mavic 3, Skydio 2+", "dev": "DJI, Skydio", "hw": "ARM CPU, GPU (Jetson TX2)" }
                            ]
                        },
                        {
                            "id": "rob_av",
                            "l": "Autonomous Vehicles (AV)",
                            "ch": [
                                { "id": "rob_av_sensors", "l": "AV sensor stack", "product": "Waymo Sensor Suite, Tesla Vision", "dev": "Waymo, Tesla", "hw": "LiDAR (Velodyne), cameras, radar, IMU" },
                                { "id": "rob_av_perception", "l": "Perception (detection, tracking)", "tool": "PointPillars, CenterPoint", "hw": "NVIDIA DRIVE AGX Orin" },
                                { "id": "rob_av_planning", "l": "Planning & control", "tool": "Apollo (Baidu), Autoware", "dev": "Baidu, Tier IV", "hw": "x86 with GPU" },
                                { "id": "rob_av_safety", "l": "Safety certification (ISO 26262, SOTIF)", "tool": "ROS 2, DDS" }
                            ]
                        },
                        {
                            "id": "rob_hri",
                            "l": "Human‑Robot Interaction",
                            "ch": [
                                { "id": "rob_hri_speech", "l": "Speech & gesture interfaces", "tool": "SpeechRecognition, MediaPipe", "hw": "Microphone, camera" },
                                { "id": "rob_hri_cobots", "l": "Collaborative robots (cobots)", "product": "Universal Robots UR10e, Franka Emika Panda", "dev": "Universal Robots, Franka Emika", "hw": "Integrated force sensors" },
                                { "id": "rob_hri_social", "l": "Social robots", "product": "Pepper (SoftBank), Nao", "dev": "SoftBank Robotics", "hw": "Embedded ARM, cameras" }
                            ]
                        },
                        {
                            "id": "rob_fm",
                            "l": "Foundation Models for Robotics",
                            "ch": [
                                { "id": "rob_fm_rt", "l": "RT‑1 / RT‑2 (Robotics Transformer)", "dev": "Google DeepMind", "hw": "TPU v4 or NVIDIA A100", "tool": "TensorFlow, JAX" },
                                { "id": "rob_fm_palme", "l": "PaLM‑E (Embodied LLM)", "dev": "Google", "hw": "Large‑scale TPU cluster" },
                                { "id": "rob_fm_octo", "l": "Octo (open robot policy)", "dev": "UC Berkeley, Stanford", "hw": "NVIDIA A100 (80GB)" },
                                { "id": "rob_fm_openvla", "l": "OpenVLA (open vision‑language‑action)", "dev": "Stanford, UC Berkeley", "hw": "NVIDIA RTX 4090 or A100", "tool": "PyTorch, Hugging Face" }
                            ]
                        },
                        {
                            "id": "rob_sim",
                            "l": "Simulation Environments",
                            "ch": [
                                { "id": "rob_sim_isaac", "l": "NVIDIA Isaac Gym / Isaac Lab", "dev": "NVIDIA", "hw": "NVIDIA RTX GPU (CUDA, PhysX)" },
                                { "id": "rob_sim_mujoco", "l": "MuJoCo (Multi‑Joint dynamics)", "dev": "DeepMind (formerly Roboti)", "hw": "CPU, GPU optional", "tool": "MuJoCo Python bindings" },
                                { "id": "rob_sim_gazebo", "l": "Gazebo + ROS integration", "dev": "Open Robotics", "hw": "CPU (GPU optional for rendering)" },
                                { "id": "rob_sim_webots", "l": "Webots", "dev": "Cyberbotics" }
                            ]
                        },
                        {
                            "id": "rob_middleware",
                            "l": "Middleware & Frameworks",
                            "ch": [
                                { "id": "rob_middleware_ros", "l": "ROS / ROS 2", "dev": "Open Robotics (now Intrinsic)", "hw": "Any Linux PC (x86/ARM)", "tool": "ROS 2 Humble, Foxy" },
                                { "id": "rob_middleware_dds", "l": "DDS (Data Distribution Service)", "product": "Fast DDS (eProsima), Connext (RTI)" },
                                { "id": "rob_middleware_openrmf", "l": "OpenRMF (Robot Middleware Framework)", "dev": "Open Robotics" }
                            ]
                        }
                    ]
                },
                // ─────────────────────────────────────────────────────────
                // 8. MULTIMODAL AI
                // ─────────────────────────────────────────────────────────
                {
                    "id": "mm",
                    "c": "mm",
                    "l": "Multimodal AI",
                    "ch": [
                        {
                            "id": "mm_vl",
                            "l": "Vision‑Language Models",
                            "ch": [
                                {
                                    "id": "mm_vl_contrastive",
                                    "l": "Contrastive pretraining",
                                    "ch": [
                                        { "id": "mm_vl_clip", "l": "CLIP (OpenAI)", "hw": "GPU (12GB+ VRAM)", "tool": "OpenAI CLIP (PyTorch)", "product": "CLIP API", "dev": "OpenAI (Radford et al.)" },
                                        { "id": "mm_vl_align", "l": "ALIGN (Google)", "hw": "Cloud TPU", "tool": "TensorFlow", "dev": "Google Research" },
                                        { "id": "mm_vl_florence", "l": "Florence (Microsoft)", "hw": "NVIDIA A100", "tool": "PyTorch", "dev": "Microsoft" }
                                    ]
                                },
                                {
                                    "id": "mm_vl_grounding",
                                    "l": "Visual grounding & referring expressions",
                                    "ch": [
                                        { "id": "mm_vl_owlv2", "l": "OWL‑ViT (open‑vocabulary detection)", "hw": "GPU (8GB+ VRAM)", "tool": "Hugging Face Transformers", "dev": "Google Research" },
                                        { "id": "mm_vl_grounding_dino", "l": "Grounding DINO", "hw": "GPU (8GB+ VRAM)", "tool": "Grounding DINO (PyTorch)", "dev": "IDEA‑CVR" }
                                    ]
                                },
                                {
                                    "id": "mm_vl_caption",
                                    "l": "Image captioning",
                                    "ch": [
                                        { "id": "mm_vl_blip", "l": "BLIP / BLIP‑2", "hw": "GPU (8GB+ VRAM)", "tool": "Hugging Face Transformers", "dev": "Salesforce Research" },
                                        { "id": "mm_vl_coca", "l": "CoCa (Contrastive Captioner)", "hw": "TPU v4", "tool": "JAX", "dev": "Google Research" },
                                        { "id": "mm_vl_ofa", "l": "OFA (One For All)", "hw": "GPU (8GB+ VRAM)", "tool": "Hugging Face", "dev": "Microsoft Research" }
                                    ]
                                },
                                {
                                    "id": "mm_vl_vqa",
                                    "l": "Visual question answering (VQA)",
                                    "ch": [
                                        { "id": "mm_vl_vqa_2", "l": "VQA v2 dataset", "hw": "CPU/GPU", "tool": "Hugging Face datasets", "dev": "Georgia Tech" },
                                        { "id": "mm_vl_mc", "l": "Multimodal MC models (MCAN, LXMERT)", "hw": "GPU (8GB+ VRAM)", "tool": "PyTorch", "dev": "Tencent (MCAN), UNC (LXMERT)" }
                                    ]
                                }
                            ]
                        },
                        {
                            "id": "mm_av",
                            "l": "Audio‑Visual Learning",
                            "ch": [
                                {
                                    "id": "mm_av_asr",
                                    "l": "Audio‑visual speech recognition (AVSR)",
                                    "ch": [
                                        { "id": "mm_av_lipnet", "l": "LipNet", "hw": "GPU (6GB+ VRAM)", "tool": "TensorFlow", "dev": "Oxford (Assael et al.)" },
                                        { "id": "mm_av_av_hubert", "l": "AV‑HuBERT", "hw": "GPU (8GB+ VRAM)", "tool": "PyTorch", "dev": "Facebook AI" }
                                    ]
                                },
                                {
                                    "id": "mm_av_localisation",
                                    "l": "Sound source localisation",
                                    "ch": [
                                        { "id": "mm_av_ssl", "l": "Self‑supervised audio‑visual localisation", "hw": "GPU", "tool": "PyTorch", "dev": "Google (Arandjelovic & Zisserman)" }
                                    ]
                                },
                                { "id": "mm_av_sync", "l": "Audio‑video synchronisation (Look, Listen and Learn)", "hw": "GPU", "tool": "PyTorch", "dev": "DeepMind" },
                                { "id": "mm_av_emotion", "l": "Multimodal emotion recognition (MER)", "hw": "CPU/GPU", "tool": "PyTorch, TensorFlow", "dev": "CMU (MSP‑Podcast)" }
                            ]
                        },
                        {
                            "id": "mm_code",
                            "l": "Code & Structured Data",
                            "ch": [
                                {
                                    "id": "mm_code_gen",
                                    "l": "Code generation",
                                    "ch": [
                                        { "id": "mm_code_codex", "l": "Codex (OpenAI)", "hw": "Cloud API", "product": "GitHub Copilot", "dev": "OpenAI" },
                                        { "id": "mm_code_codellama", "l": "CodeLlama (Meta)", "hw": "GPU (8GB+ VRAM)", "tool": "Hugging Face Transformers", "dev": "Meta AI" },
                                        { "id": "mm_code_deepseek_coder", "l": "DeepSeek‑Coder", "hw": "GPU (8GB+ VRAM)", "tool": "vLLM, Hugging Face", "dev": "DeepSeek" },
                                        { "id": "mm_code_starcoder", "l": "StarCoder (BigCode)", "hw": "GPU (8GB+ VRAM)", "tool": "Hugging Face", "dev": "BigCode community" }
                                    ]
                                },
                                {
                                    "id": "mm_code_sql",
                                    "l": "Text‑to‑SQL",
                                    "ch": [
                                        { "id": "mm_code_t5_sql", "l": "T5‑based SQL generation", "hw": "GPU (6GB+ VRAM)", "tool": "Hugging Face", "dev": "Google (T5)" },
                                        { "id": "mm_code_spider", "l": "Spider benchmark", "tool": "Spider dataset", "dev": "Yale University" }
                                    ]
                                },
                                { "id": "mm_code_table", "l": "Spreadsheet & table reasoning (TaBERT, TAPAS)", "hw": "GPU (6GB+ VRAM)", "tool": "Hugging Face (TAPAS)", "dev": "Google (TAPAS)" },
                                { "id": "mm_code_synthesis", "l": "Program synthesis & verification", "hw": "CPU/GPU", "tool": "OpenAI Gym for code", "dev": "Microsoft (DeepCoder)" }
                            ]
                        },
                        {
                            "id": "mm_sci",
                            "l": "Scientific Multimodal AI",
                            "ch": [
                                {
                                    "id": "mm_sci_protein",
                                    "l": "Protein structure",
                                    "ch": [
                                        { "id": "mm_sci_alphafold2", "l": "AlphaFold 2", "hw": "GPU (A100 40GB)", "tool": "DeepMind AlphaFold (JAX)", "product": "AlphaFold DB", "dev": "DeepMind" },
                                        { "id": "mm_sci_alphafold3", "l": "AlphaFold 3", "hw": "GPU cluster", "product": "AlphaFold Server", "dev": "Google DeepMind" },
                                        { "id": "mm_sci_esmfold", "l": "ESMFold (Meta)", "hw": "GPU (8GB+ VRAM)", "tool": "esm (Evolutionary Scale Modeling)", "dev": "Meta AI" }
                                    ]
                                },
                                { "id": "mm_sci_rna", "l": "RNA structure prediction", "hw": "GPU", "tool": "Rosetta, SimRNA", "dev": "Rhiju Das (Stanford)" },
                                {
                                    "id": "mm_sci_mol",
                                    "l": "Molecular generation & property prediction",
                                    "ch": [
                                        { "id": "mm_sci_reinvent", "l": "REINVENT (reinforcement learning for molecule design)", "hw": "GPU (6GB+ VRAM)", "tool": "PyTorch", "dev": "Genentech" },
                                        { "id": "mm_sci_graphinvent", "l": "GraphINVENT", "hw": "GPU", "tool": "PyTorch Geometric", "dev": "Merck" }
                                    ]
                                },
                                { "id": "mm_sci_dti", "l": "Drug‑target interaction modelling", "hw": "GPU", "tool": "DeepPurpose", "dev": "MIT (Huang et al.)" },
                                { "id": "mm_sci_materials", "l": "Materials property prediction (GNoME, MatSciML)", "hw": "GPU cluster", "product": "GNoME (Google)", "dev": "Google DeepMind" },
                                {
                                    "id": "mm_sci_climate",
                                    "l": "Climate modelling",
                                    "ch": [
                                        { "id": "mm_sci_pangu", "l": "Pangu‑Weather (Huawei)", "hw": "GPU (A100)", "tool": "MindSpore", "dev": "Huawei Cloud" },
                                        { "id": "mm_sci_graphcast", "l": "GraphCast (Google)", "hw": "TPU v4", "tool": "JAX", "dev": "Google DeepMind" }
                                    ]
                                },
                                { "id": "mm_sci_genomics", "l": "Genomics (DNABERT, Nucleotide Transformer)", "hw": "GPU (8GB+ VRAM)", "tool": "Hugging Face", "dev": "IBM (DNABERT), InstaDeep (NT)" },
                                { "id": "mm_sci_astro", "l": "Astronomical survey analysis", "hw": "CPU/GPU", "tool": "AstroPy, PyTorch", "dev": "LSST, Vera Rubin Observatory" }
                            ]
                        },
                        {
                            "id": "mm_video",
                            "l": "Video & Temporal Multimodal",
                            "ch": [
                                {
                                    "id": "mm_video_caption",
                                    "l": "Video captioning & description",
                                    "ch": [
                                        { "id": "mm_video_clip4clip", "l": "CLIP4Clip", "hw": "GPU (8GB+ VRAM)", "tool": "PyTorch", "dev": "Microsoft Research" },
                                        { "id": "mm_video_frozen", "l": "Frozen in Time", "hw": "GPU (8GB+ VRAM)", "tool": "PyTorch", "dev": "DeepMind" }
                                    ]
                                },
                                {
                                    "id": "mm_video_qa",
                                    "l": "Video question answering",
                                    "ch": [
                                        { "id": "mm_video_activitynet", "l": "ActivityNet benchmark", "hw": "CPU/GPU", "tool": "Hugging Face datasets", "dev": "Google, CUHK" },
                                        { "id": "mm_video_llava_video", "l": "LLaVA‑Video", "hw": "GPU (8GB+ VRAM)", "tool": "Hugging Face", "dev": "University of Wisconsin" }
                                    ]
                                },
                                {
                                    "id": "mm_video_gen",
                                    "l": "Text‑to‑video generation",
                                    "ch": [
                                        { "id": "mm_video_sora", "l": "Sora (OpenAI)", "hw": "Large‑scale cloud clusters", "product": "Sora", "dev": "OpenAI" },
                                        { "id": "mm_video_runway_gen3", "l": "Runway Gen‑3", "hw": "Cloud GPU", "product": "Runway ML", "dev": "Runway AI" },
                                        { "id": "mm_video_kling", "l": "Kling (快手)", "hw": "Cloud", "product": "Kling", "dev": "Kuaishou Technology" },
                                        { "id": "mm_video_veo", "l": "Veo (Google)", "hw": "Cloud TPU", "product": "Veo", "dev": "Google DeepMind" },
                                        { "id": "mm_video_stable_video", "l": "Stable Video Diffusion", "hw": "GPU (12GB+ VRAM)", "tool": "Stability AI", "dev": "Stability AI" }
                                    ]
                                },
                                { "id": "mm_video_grounding", "l": "Video grounding & moment retrieval", "hw": "GPU", "tool": "PyTorch", "dev": "UNC (Gao et al.)" }
                            ]
                        },
                        {
                            "id": "mm_fm",
                            "l": "Multimodal Foundation Models",
                            "ch": [
                                {
                                    "id": "mm_fm_flamingo",
                                    "l": "Flamingo (DeepMind)",
                                    "hw": "TPU v4 / A100",
                                    "tool": "Flamingo (JAX)",
                                    "dev": "DeepMind"
                                },
                                {
                                    "id": "mm_fm_gpt4o",
                                    "l": "GPT‑4o (OpenAI)",
                                    "hw": "Cloud API",
                                    "product": "GPT‑4o",
                                    "dev": "OpenAI"
                                },
                                {
                                    "id": "mm_fm_gemini",
                                    "l": "Gemini (Google)",
                                    "hw": "Cloud API",
                                    "product": "Gemini 1.5 Pro / 2.0 Flash",
                                    "dev": "Google DeepMind"
                                },
                                {
                                    "id": "mm_fm_claude",
                                    "l": "Claude 3 Vision (Anthropic)",
                                    "hw": "Cloud API",
                                    "product": "Claude 3",
                                    "dev": "Anthropic"
                                },
                                {
                                    "id": "mm_fm_llava",
                                    "l": "LLaVA (Large Language and Vision Assistant)",
                                    "hw": "GPU (8GB+ VRAM for 7B, 16GB+ for 13B)",
                                    "tool": "Hugging Face Transformers",
                                    "dev": "University of Wisconsin, Microsoft"
                                },
                                {
                                    "id": "mm_fm_internvl",
                                    "l": "InternVL (Shanghai AI Lab)",
                                    "hw": "GPU (8GB+ VRAM)",
                                    "tool": "InternVL (PyTorch)",
                                    "dev": "Shanghai AI Lab"
                                },
                                {
                                    "id": "mm_fm_unified_io",
                                    "l": "Unified‑IO / UnifiedQA",
                                    "hw": "GPU (8GB+ VRAM)",
                                    "tool": "PyTorch",
                                    "dev": "Allen Institute for AI"
                                },
                                {
                                    "id": "mm_fm_any2any",
                                    "l": "Any‑to‑any models (CoDi, NExT‑GPT)",
                                    "hw": "GPU (8GB+ VRAM)",
                                    "tool": "PyTorch",
                                    "dev": "NExT++ (NExT‑GPT), UC Berkeley (CoDi)"
                                }
                            ]
                        }
                    ]
                },
                // ─────────────────────────────────────────────────────────
                // 9. AI SAFETY & ALIGNMENT (cross-cutting)
                // ─────────────────────────────────────────────────────────
                {
                    "id": "safety",
                    "c": "safety",
                    "l": "AI Safety & Alignment",
                    "ch": [
                        {
                            "id": "s_align_problem",
                            "l": "The Alignment Problem",
                            "ch": [
                                { "id": "s_align_value", "l": "Value alignment (whose values?)", "hw": "CPU", "tool": "None (conceptual)", "dev": "Stuart Russell, Norbert Wiener" },
                                { "id": "s_align_reward", "l": "Reward hacking & specification gaming", "hw": "CPU/GPU", "tool": "OpenAI Gym (specification gaming examples)", "dev": "DeepMind (specification gaming paper)" },
                                { "id": "s_align_misgen", "l": "Goal misgeneralisation", "hw": "CPU/GPU", "tool": "PyTorch, TensorFlow", "dev": "DeepMind (Shah et al.)" },
                                { "id": "s_align_deceptive", "l": "Deceptive alignment – appearing aligned", "hw": "CPU/GPU", "dev": "Evan Hubinger (Anthropic)" },
                                { "id": "s_align_instrumental", "l": "Instrumental convergence (self‑preservation etc.)", "dev": "Nick Bostrom" },
                                { "id": "s_align_orthogonality", "l": "Orthogonality thesis", "dev": "Nick Bostrom" }
                            ]
                        },
                        {
                            "id": "s_align_tech",
                            "l": "Alignment Techniques",
                            "ch": [
                                {
                                    "id": "s_rlhf",
                                    "l": "RLHF (Reward Model + PPO)",
                                    "ch": [
                                        { "id": "s_rlhf_reward", "l": "Reward modelling", "hw": "GPU (8GB+ VRAM)", "tool": "TRL (Hugging Face), DeepSpeed", "dev": "OpenAI (Christiano et al.)" },
                                        { "id": "s_rlhf_ppo", "l": "PPO fine‑tuning", "hw": "GPU (8GB+ VRAM)", "tool": "TRL, RLlib", "dev": "OpenAI" },
                                        { "id": "s_rlhf_hack", "l": "Reward hacking in RLHF", "hw": "CPU/GPU", "tool": "None" }
                                    ]
                                },
                                { "id": "s_dpo", "l": "DPO (Direct Preference Optimisation)", "hw": "GPU (8GB+ VRAM)", "tool": "TRL (Hugging Face)", "dev": "Stanford (Rafailov et al.)" },
                                { "id": "s_constitutional", "l": "Constitutional AI (Anthropic)", "hw": "GPU cluster", "tool": "Anthropic API, Claude", "product": "Claude", "dev": "Anthropic" },
                                { "id": "s_rlaif", "l": "RLAIF (AI as feedback source)", "hw": "GPU cluster", "tool": "Self‑Instruct, Constitutional AI", "dev": "Google (RLAIF paper)" },
                                { "id": "s_debate", "l": "Debate – AI arguing for human evaluator", "hw": "GPU cluster", "tool": "None (conceptual)", "dev": "Geoffrey Irving (OpenAI)" },
                                { "id": "s_oversight", "l": "Scalable oversight (recursive reward modelling)", "dev": "Paul Christiano" },
                                { "id": "s_amplification", "l": "Amplification (IDA – Iterated Distillation and Amplification)", "dev": "Paul Christiano" },
                                { "id": "s_cirl", "l": "Cooperative inverse reinforcement learning (CIRL)", "dev": "Dylan Hadfield‑Menell" },
                                { "id": "s_value_learning", "l": "Value learning from human behaviour", "hw": "CPU/GPU", "tool": "PyTorch, TensorFlow", "dev": "Stuart Russell" }
                            ]
                        },
                        {
                            "id": "s_robust",
                            "l": "Robustness & Reliability",
                            "ch": [
                                {
                                    "id": "s_adv_ex",
                                    "l": "Adversarial examples",
                                    "ch": [
                                        { "id": "s_adv_fgsm", "l": "FGSM (Fast Gradient Sign Method)", "hw": "GPU", "tool": "CleverHans, Foolbox", "dev": "Ian Goodfellow" },
                                        { "id": "s_adv_pgd", "l": "PGD (Projected Gradient Descent)", "hw": "GPU", "tool": "CleverHans, Foolbox", "dev": "Aleksander Madry" },
                                        { "id": "s_adv_cw", "l": "C&W (Carlini & Wagner)", "hw": "GPU", "tool": "CleverHans", "dev": "Nicholas Carlini" }
                                    ]
                                },
                                { "id": "s_adv_train", "l": "Adversarial training & certified defences", "hw": "GPU", "tool": "CleverHans, TensorFlow Privacy", "dev": "Ian Goodfellow (adversarial training)" },
                                {
                                    "id": "s_ood",
                                    "l": "Distribution shift & OOD detection",
                                    "ch": [
                                        { "id": "s_ood_bench", "l": "Benchmarks (CIFAR‑10‑C, ImageNet‑C)", "hw": "CPU/GPU", "tool": "PyTorch, TensorFlow", "dev": "MIT, Google" }
                                    ]
                                },
                                {
                                    "id": "s_uncertainty",
                                    "l": "Uncertainty quantification",
                                    "ch": [
                                        { "id": "s_unc_epistemic", "l": "Epistemic vs aleatoric uncertainty", "hw": "CPU/GPU" },
                                        { "id": "s_unc_bayesian", "l": "Bayesian deep learning", "hw": "GPU (8GB+ VRAM)", "tool": "Pyro, TensorFlow Probability", "dev": "Yarin Gal" },
                                        { "id": "s_unc_mcdo", "l": "Monte Carlo dropout", "hw": "GPU", "tool": "PyTorch, TensorFlow", "dev": "Yarin Gal" },
                                        { "id": "s_unc_ensembles", "l": "Deep ensembles", "hw": "GPU (multi‑GPU)", "tool": "PyTorch, TensorFlow", "dev": "Balaji Lakshminarayanan" },
                                        { "id": "s_unc_conformal", "l": "Conformal prediction", "hw": "CPU", "tool": "crepes, MAPIE", "dev": "Vladimir Vovk" }
                                    ]
                                },
                                { "id": "s_formal", "l": "Formal verification for neural networks", "hw": "CPU/GPU", "tool": "ERAN, α,β‑CROWN", "dev": "ETH Zurich (α,β‑CROWN)" },
                                { "id": "s_backdoor", "l": "Backdoor & data poisoning attacks", "hw": "CPU/GPU", "tool": "Trojan AI, BadNets", "dev": "UC Berkeley (BadNets)" }
                            ]
                        },
                        {
                            "id": "s_xai",
                            "l": "Interpretability & Explainability",
                            "ch": [
                                {
                                    "id": "s_xai_feat",
                                    "l": "Feature attribution methods",
                                    "ch": [
                                        { "id": "s_xai_saliency", "l": "Saliency maps & gradient methods", "hw": "GPU", "tool": "Captum, TensorFlow Explainability" },
                                        { "id": "s_xai_integrated", "l": "Integrated gradients", "hw": "GPU", "tool": "Captum", "dev": "Mukund Sundararajan (Google)" },
                                        { "id": "s_xai_shap", "l": "SHAP (Shapley values)", "hw": "CPU/GPU", "tool": "shap library", "dev": "Scott Lundberg" },
                                        { "id": "s_xai_lime", "l": "LIME", "hw": "CPU", "tool": "lime library", "dev": "Marco Ribeiro" },
                                        { "id": "s_xai_gradcam", "l": "GRAD‑CAM & variants", "hw": "GPU", "tool": "pytorch‑grad‑cam" }
                                    ]
                                },
                                {
                                    "id": "s_xai_mech",
                                    "l": "Mechanistic interpretability",
                                    "ch": [
                                        { "id": "s_xai_circuits", "l": "Circuits – induction heads, superposition", "hw": "GPU", "tool": "TransformerLens", "dev": "Anthropic (Chris Olah)" },
                                        { "id": "s_xai_probes", "l": "Probing classifiers", "hw": "GPU", "tool": "PyTorch, Hugging Face", "dev": "Guillaume Alain" },
                                        { "id": "s_xai_patching", "l": "Activation patching & causal tracing", "hw": "GPU", "tool": "TransformerLens", "dev": "Neel Nanda" },
                                        { "id": "s_xai_sae", "l": "Sparse autoencoders for features", "hw": "GPU (8GB+ VRAM)", "tool": "Anthropic SAEs", "dev": "Anthropic" },
                                        { "id": "s_xai_repr_eng", "l": "Representation engineering", "hw": "GPU", "tool": "PyTorch", "dev": "Andy Zou (Representation Engineering)" }
                                    ]
                                },
                                {
                                    "id": "s_xai_concept",
                                    "l": "Concept‑based explanations",
                                    "ch": [
                                        { "id": "s_xai_tcav", "l": "TCAV (testing with concept activation vectors)", "hw": "GPU", "tool": "TCAV (Google)", "dev": "Been Kim" },
                                        { "id": "s_xai_cbm", "l": "Concept bottleneck models", "hw": "GPU", "tool": "PyTorch", "dev": "Pang Wei Koh" }
                                    ]
                                },
                                { "id": "s_xai_rule", "l": "Rule extraction from neural networks", "hw": "CPU", "tool": "sklearn, keras‑tuner", "dev": "Rudy Setiono" },
                                { "id": "s_xai_practice", "l": "Explainability in practice – model cards, datasheets", "tool": "Model Cards (Google), Datasheets for Datasets (Microsoft)", "dev": "Google (Mitchell et al.)" }
                            ]
                        },
                        {
                            "id": "s_risk",
                            "l": "Catastrophic & Long‑term Risks",
                            "ch": [
                                {
                                    "id": "s_risk_misuse",
                                    "l": "Misuse risks",
                                    "ch": [
                                        { "id": "s_risk_bio", "l": "Biological & chemical weapon design", "hw": "Cloud/GPU", "tool": "LLMs (GPT‑4, Claude)", "dev": "OpenAI, Anthropic" },
                                        { "id": "s_risk_cyber", "l": "Cyberweapons & offensive hacking", "hw": "GPU", "tool": "LLMs (code generation)", "dev": "Various" },
                                        { "id": "s_risk_autonomous_weapons", "l": "Autonomous weapons systems (LAWS)", "hw": "Embedded GPU (NVIDIA Jetson)", "product": "Drone swarms", "dev": "DARPA, militaries" },
                                        { "id": "s_risk_disinfo", "l": "AI‑generated disinformation at scale", "hw": "Cloud", "product": "Deepfake tools, LLM spam", "dev": "Various" }
                                    ]
                                },
                                {
                                    "id": "s_risk_misalignment",
                                    "l": "Misalignment risks",
                                    "ch": [
                                        { "id": "s_risk_wrong_goals", "l": "Advanced agent pursuing wrong goals", "hw": "GPU cluster", "dev": "Nick Bostrom" },
                                        { "id": "s_risk_power_seeking", "l": "Power‑seeking behaviour", "dev": "Michael Cohen" },
                                        { "id": "s_risk_deceptive_reason", "l": "Deceptive instrumental reasoning", "dev": "Evan Hubinger" }
                                    ]
                                },
                                {
                                    "id": "s_risk_structural",
                                    "l": "Structural risks",
                                    "ch": [
                                        { "id": "s_risk_power_conc", "l": "Concentration of AI power", "hw": "Cloud", "product": "OpenAI, Google, Anthropic", "dev": "N/A" },
                                        { "id": "s_risk_surveillance", "l": "AI‑enabled surveillance states", "product": "Facial recognition, social scoring", "dev": "Various governments" },
                                        { "id": "s_risk_economic", "l": "Economic disruption at civilisational scale", "hw": "N/A", "dev": "N/A" }
                                    ]
                                },
                                { "id": "s_risk_timelines", "l": "AGI & superintelligence timelines", "hw": "N/A", "tool": "Forecasting platforms (Metaculus)", "dev": "Various (Bostrom, Yudkowsky, OpenAI)" },
                                { "id": "s_risk_forecasting", "l": "AI forecasting methods", "hw": "CPU/GPU", "tool": "Metaculus, Elicit", "dev": "Superforecasters" }
                            ]
                        },
                        {
                            "id": "s_eval",
                            "l": "AI Evaluation & Benchmarking",
                            "ch": [
                                {
                                    "id": "s_eval_lang",
                                    "l": "Language benchmarks",
                                    "ch": [
                                        { "id": "s_eval_mmlu", "l": "MMLU (Massive Multitask Language Understanding)", "hw": "CPU/GPU", "tool": "EleutherAI LM Evaluation Harness", "dev": "UC Berkeley, OpenAI" },
                                        { "id": "s_eval_hellaswag", "l": "HellaSwag", "hw": "CPU/GPU", "tool": "EleutherAI LM Evaluation Harness", "dev": "Allen Institute for AI" },
                                        { "id": "s_eval_arc", "l": "ARC (AI2 Reasoning Challenge)", "hw": "CPU/GPU", "tool": "EleutherAI LM Evaluation Harness", "dev": "Allen Institute for AI" }
                                    ]
                                },
                                {
                                    "id": "s_eval_reason",
                                    "l": "Reasoning benchmarks",
                                    "ch": [
                                        { "id": "s_eval_gsm8k", "l": "GSM8K (math word problems)", "hw": "CPU/GPU", "tool": "Hugging Face", "dev": "OpenAI" },
                                        { "id": "s_eval_math", "l": "MATH dataset", "hw": "CPU/GPU", "tool": "Hugging Face", "dev": "UC Berkeley (Hendrycks et al.)" },
                                        { "id": "s_eval_humaneval", "l": "HumanEval (code generation)", "hw": "CPU/GPU", "tool": "OpenAI HumanEval", "dev": "OpenAI" }
                                    ]
                                },
                                {
                                    "id": "s_eval_safety",
                                    "l": "Safety evals",
                                    "ch": [
                                        { "id": "s_eval_truthfulqa", "l": "TruthfulQA", "hw": "CPU/GPU", "tool": "EleutherAI LM Evaluation Harness", "dev": "University of Oxford" },
                                        { "id": "s_eval_bbq", "l": "BBQ (Bias Benchmark for QA)", "hw": "CPU/GPU", "tool": "Hugging Face", "dev": "New York University" },
                                        { "id": "s_eval_helm", "l": "HELM (Holistic Evaluation of Language Models)", "hw": "CPU/GPU", "tool": "Stanford HELM", "dev": "Stanford University" }
                                    ]
                                },
                                { "id": "s_eval_redteam", "l": "Red‑teaming & adversarial evaluation", "hw": "GPU", "tool": "PyRIT (Microsoft), Garak", "dev": "Microsoft (PyRIT)" },
                                { "id": "s_eval_human", "l": "Human evaluation & RLHF annotations", "hw": "CPU", "tool": "Scale AI, Surge AI", "product": "Scale AI", "dev": "Scale AI" },
                                { "id": "s_eval_model_cards", "l": "Model cards & responsible disclosure", "hw": "N/A", "tool": "Model Cards (Google)", "dev": "Google (Mitchell et al.)" }
                            ]
                        }
                    ]
                },
                // ─────────────────────────────────────────────────────────
                // 10. AI ETHICS & GOVERNANCE
                // ─────────────────────────────────────────────────────────
                {
                    "id": "ethics",
                    "c": "ethics",
                    "l": "AI Ethics & Governance",
                    "ch": [
                        {
                            "id": "e_bias",
                            "l": "Bias & Fairness",
                            "ch": [
                                {
                                    "id": "e_bias_sources",
                                    "l": "Sources of bias",
                                    "ch": [
                                        { "id": "e_bias_historical", "l": "Historical bias in data", "hw": "CPU/GPU", "tool": "AIF360, Fairlearn", "dev": "N/A" },
                                        { "id": "e_bias_measurement", "l": "Measurement bias", "dev": "N/A" },
                                        { "id": "e_bias_aggregation", "l": "Aggregation bias", "dev": "N/A" },
                                        { "id": "e_bias_deployment", "l": "Deployment bias", "dev": "N/A" }
                                    ]
                                },
                                {
                                    "id": "e_fairness_metrics",
                                    "l": "Fairness definitions & metrics",
                                    "ch": [
                                        { "id": "e_fair_demographic", "l": "Demographic parity (statistical parity)", "hw": "CPU", "tool": "AIF360 (IBM), Fairlearn (Microsoft)", "dev": "IBM, Microsoft" },
                                        { "id": "e_fair_equalised", "l": "Equalised odds (equal opportunity)", "dev": "Moritz Hardt" },
                                        { "id": "e_fair_calibration", "l": "Calibration", "dev": "N/A" },
                                        { "id": "e_fair_individual", "l": "Individual fairness", "dev": "Cynthia Dwork" },
                                        { "id": "e_fair_counterfactual", "l": "Counterfactual fairness", "dev": "Matt Kusner" }
                                    ]
                                },
                                {
                                    "id": "e_debiasing",
                                    "l": "Debiasing techniques",
                                    "ch": [
                                        { "id": "e_debias_pre", "l": "Pre‑processing (reweighting, relabelling)", "hw": "CPU", "tool": "AIF360", "dev": "IBM" },
                                        { "id": "e_debias_in", "l": "In‑processing (regularisation, adversarial debiasing)", "hw": "GPU", "tool": "AIF360, Fairlearn", "dev": "Google (adversarial debiasing)" },
                                        { "id": "e_debias_post", "l": "Post‑processing (threshold adjustment)", "hw": "CPU", "tool": "AIF360", "dev": "N/A" }
                                    ]
                                },
                                {
                                    "id": "e_bias_highstakes",
                                    "l": "Fairness in high‑stakes domains",
                                    "ch": [
                                        { "id": "e_bias_criminal", "l": "Criminal justice – COMPAS", "product": "COMPAS (Equivant)", "dev": "ProPublica (investigation)" },
                                        { "id": "e_bias_healthcare", "l": "Healthcare disparities", "dev": "Various" },
                                        { "id": "e_bias_hiring", "l": "Hiring & credit scoring", "product": "Amazon hiring tool (discontinued)", "dev": "Amazon" },
                                        { "id": "e_bias_facial", "l": "Facial recognition bias (Gender Shades)", "product": "IBM, Microsoft, Amazon APIs", "dev": "Joy Buolamwini (MIT), Timnit Gebru" }
                                    ]
                                }
                            ]
                        },
                        {
                            "id": "e_privacy",
                            "l": "Privacy & Data Rights",
                            "ch": [
                                { "id": "e_consent", "l": "Data collection & consent", "hw": "N/A", "dev": "GDPR (EU)", "product": "OneTrust, Cookiebot" },
                                {
                                    "id": "e_diffpriv",
                                    "l": "Differential privacy",
                                    "ch": [
                                        { "id": "e_diffpriv_def", "l": "Formal definition (ε, δ)", "hw": "CPU/GPU", "tool": "TensorFlow Privacy, PyTorch Opacus", "dev": "Cynthia Dwork (Microsoft), Frank McSherry" },
                                        { "id": "e_diffpriv_mech", "l": "Mechanisms (Laplace, Gaussian, exponential)", "hw": "CPU", "tool": "Google Differential Privacy Library", "dev": "Google" }
                                    ]
                                },
                                { "id": "e_federated_privacy", "l": "Federated learning for privacy", "hw": "GPU/CPU", "tool": "TensorFlow Federated, PySyft", "dev": "Google (Federated Learning)" },
                                { "id": "e_homomorphic", "l": "Privacy‑preserving ML – homomorphic encryption", "hw": "CPU (intensive)", "tool": "Microsoft SEAL, TenSEAL", "dev": "Microsoft (SEAL)" },
                                { "id": "e_membership", "l": "Membership inference & model inversion attacks", "hw": "GPU", "tool": "TensorFlow Privacy", "dev": "Reza Shokri" },
                                { "id": "e_unlearning", "l": "Right to be forgotten & machine unlearning", "hw": "CPU/GPU", "tool": "SISA (Sharded, Isolated, Sliced, Aggregated)", "dev": "Google (SISA), EU GDPR" },
                                { "id": "e_biometric", "l": "Biometric & sensitive data protection", "product": "Clearview AI (controversial)", "dev": "Clearview AI", "hw": "Cloud" },
                                { "id": "e_children", "l": "Children's data & COPPA (US)", "product": "COPPA (US FTC)", "dev": "US Federal Trade Commission" }
                            ]
                        },
                        {
                            "id": "e_transparency",
                            "l": "Transparency & Accountability",
                            "ch": [
                                { "id": "e_explain_individuals", "l": "Explainability for affected individuals", "hw": "CPU/GPU", "tool": "LIME, SHAP", "dev": "GDPR (right to explanation)" },
                                { "id": "e_auditing", "l": "Algorithmic auditing", "hw": "CPU/GPU", "tool": "AIF360, Audit-AI", "dev": "NYU (AI Now Institute)" },
                                { "id": "e_model_cards", "l": "Model cards & datasheets for datasets", "tool": "Model Cards (Google), Datasheets (Microsoft)", "dev": "Google, Microsoft" },
                                { "id": "e_liability", "l": "AI liability & tort law", "dev": "EU AI Liability Directive (proposed)", "product": "N/A" },
                                { "id": "e_whistleblowing", "l": "Whistleblowing & AI oversight", "dev": "OpenAI whistleblowers, US SEC" }
                            ]
                        },
                        {
                            "id": "e_disinfo",
                            "l": "Misinformation & Manipulation",
                            "ch": [
                                { "id": "e_ai_disinfo", "l": "AI‑generated disinformation", "hw": "Cloud/GPU", "product": "Deepfakes, LLM spam", "dev": "Various" },
                                {
                                    "id": "e_deepfake_detection",
                                    "l": "Deepfake detection & provenance",
                                    "ch": [
                                        { "id": "e_deepfake_tools", "l": "Detection tools (Microsoft Video Authenticator)", "hw": "GPU", "tool": "Deepware, Microsoft Video Authenticator", "dev": "Microsoft" }
                                    ]
                                },
                                { "id": "e_c2pa", "l": "C2PA content authenticity standard", "product": "C2PA (Adobe, Microsoft, Intel)", "dev": "C2PA consortium" },
                                { "id": "e_watermarking", "l": "Synthetic media watermarking", "tool": "Stable Diffusion watermarks, SynthID (Google)", "dev": "Google (SynthID), Stability AI" },
                                { "id": "e_election", "l": "Election integrity & AI", "dev": "EU, US (FEC)", "product": "AI Election Accords (Meta, OpenAI)" },
                                { "id": "e_dark_patterns", "l": "Persuasion & dark patterns", "dev": "EU (Digital Services Act)" }
                            ]
                        },
                        {
                            "id": "e_labour",
                            "l": "Labour & Economic Impact",
                            "ch": [
                                { "id": "e_automation_jobs", "l": "Automation & job displacement", "dev": "Oxford (Frey & Osborne)", "product": "N/A" },
                                { "id": "e_sector_impacts", "l": "Sector‑specific impacts – manufacturing, knowledge work", "dev": "Various (e.g., Goldman Sachs report)" },
                                { "id": "e_ubi", "l": "Universal basic income debates", "dev": "Andrew Yang, Sam Altman (OpenAI)" },
                                { "id": "e_gig", "l": "Gig economy & AI‑managed labour", "product": "Uber, Amazon Flex (AI dispatch)", "dev": "Uber, Amazon" },
                                { "id": "e_wealth_concentration", "l": "Wealth concentration & AI dividend", "dev": "OpenAI, Microsoft, NVIDIA" }
                            ]
                        },
                        {
                            "id": "e_governance",
                            "l": "Governance & Regulation",
                            "ch": [
                                { "id": "e_eu_ai_act", "l": "EU AI Act – risk tiers, prohibited uses", "dev": "European Union", "product": "EU AI Act", "hw": "N/A" },
                                { "id": "e_nist", "l": "US NIST AI Risk Management Framework", "dev": "National Institute of Standards and Technology (US)", "product": "NIST AI RMF" },
                                { "id": "e_uk_safety", "l": "UK AI Safety Institute", "dev": "UK Government", "product": "UK AISI" },
                                { "id": "e_china", "l": "China AI regulations (generative AI measures)", "dev": "Cyberspace Administration of China (CAC)", "product": "China AI Law" },
                                { "id": "e_unesco", "l": "UNESCO Recommendation on AI Ethics", "dev": "UNESCO", "product": "UNESCO AI Ethics" },
                                { "id": "e_corporate", "l": "Corporate AI ethics boards & principles", "product": "Google AI Principles, Microsoft Responsible AI", "dev": "Google, Microsoft, OpenAI, Anthropic" },
                                { "id": "e_international", "l": "International AI governance – GPAI, UN", "dev": "GPAI (Global Partnership on AI), UN (AI Advisory Body)" },
                                { "id": "e_open_vs_closed", "l": "Open‑source vs closed AI debate", "dev": "Meta (LLaMA), OpenAI (GPT‑4), Stability AI" }
                            ]
                        },
                        {
                            "id": "e_env",
                            "l": "Environmental & Social Impact",
                            "ch": [
                                { "id": "e_energy", "l": "Energy consumption of AI training", "hw": "GPU/TPU (NVIDIA A100, H100)", "dev": "UC Berkeley (Strubell et al.)" },
                                { "id": "e_carbon", "l": "Carbon footprint – data centres", "product": "Google Carbon‑Intelligent, Microsoft Carbon Aware", "dev": "Google, Microsoft" },
                                { "id": "e_water", "l": "Water usage for cooling", "dev": "UC Riverside (water footprint of AI)" },
                                { "id": "e_ewaste", "l": "E‑waste from AI hardware", "dev": "UN (Global E‑waste Monitor)" },
                                { "id": "e_ai_climate", "l": "AI for climate solutions", "product": "Climate Change AI (CCAI)", "dev": "Climate Change AI" },
                                { "id": "e_digital_divide", "l": "Digital divide & AI access inequality", "dev": "World Bank, ITU" }
                            ]
                        },
                        {
                            "id": "e_human_rights",
                            "l": "Human Rights & AI",
                            "ch": [
                                { "id": "e_surveillance", "l": "Surveillance & mass monitoring", "product": "Clearview AI, China's social credit system", "dev": "China, US, UK (Facial recognition)" },
                                { "id": "e_social_scoring", "l": "Social scoring systems", "dev": "China (Sesame Credit)", "product": "Social Credit System" },
                                { "id": "e_autonomous_weapons", "l": "Autonomous weapons & LAWS (lethal autonomous weapons systems)", "dev": "UN (Convention on Certain Conventional Weapons)", "product": "Drone swarms" },
                                { "id": "e_ai_conflict", "l": "AI in conflict zones (Israel‑Gaza, Ukraine)", "dev": "Various militaries" },
                                { "id": "e_censorship", "l": "Freedom of expression & AI censorship", "dev": "China (great firewall), EU (Digital Services Act)" }
                            ]
                        }
                    ]
                },
                // ─────────────────────────────────────────────────────────
                // 11. AI INFRASTRUCTURE & MLOPS
                // ─────────────────────────────────────────────────────────
                {
                    "id": "inf",
                    "c": "inf",
                    "l": "AI Infrastructure & MLOps",
                    "ch": [
                        {
                            "id": "inf_hw",
                            "l": "Hardware & Compute",
                            "ch": [
                                {
                                    "id": "inf_gpu",
                                    "l": "GPUs",
                                    "ch": [
                                        { "id": "inf_gpu_nvidia", "l": "NVIDIA – A100, H100, H200, B100", "hw": "PCIe or SXM, 40/80GB HBM (A100), 80/141GB HBM3e (H100)", "product": "NVIDIA A100, H100, B100", "dev": "NVIDIA" },
                                        { "id": "inf_gpu_amd", "l": "AMD MI300X", "hw": "192GB HBM3", "product": "AMD Instinct MI300X", "dev": "AMD" },
                                        { "id": "inf_gpu_memory", "l": "GPU memory – HBM, VRAM", "dev": "SK Hynix, Samsung, Micron" },
                                        { "id": "inf_cuda", "l": "CUDA & cuDNN", "tool": "CUDA Toolkit, cuDNN", "dev": "NVIDIA" }
                                    ]
                                },
                                {
                                    "id": "inf_accel",
                                    "l": "Specialised AI accelerators",
                                    "ch": [
                                        { "id": "inf_tpu", "l": "Google TPU v4, v5", "hw": "TPU v4 (4x4x4 mesh, 32GB HBM), TPU v5 (up to 95GB)", "product": "TPU (Google Cloud)", "dev": "Google" },
                                        { "id": "inf_cerebras", "l": "Cerebras Wafer Scale Engine", "hw": "WSE‑2 (2.6 trillion transistors, 40GB on‑wafer SRAM)", "product": "Cerebras CS‑2", "dev": "Cerebras Systems" },
                                        { "id": "inf_groq", "l": "Groq LPU (Language Processing Unit)", "hw": "GroqCard (14nm, 230MB SRAM)", "product": "Groq LPU", "dev": "Groq" },
                                        { "id": "inf_tenstorrent", "l": "Tenstorrent (Grayskull, Wormhole)", "hw": "Tenstorrent Grayskull (75W, 1.2 GB/s bandwidth)", "product": "Tenstorrent", "dev": "Tenstorrent (Jim Keller)" },
                                        { "id": "inf_graphcore", "l": "Graphcore IPU (Bow)", "hw": "IPU Bow (1472 cores, 64GB HBM)", "product": "Graphcore Bow", "dev": "Graphcore" }
                                    ]
                                },
                                {
                                    "id": "inf_edge",
                                    "l": "Edge & on‑device AI",
                                    "ch": [
                                        { "id": "inf_edge_npu", "l": "Mobile NPUs – Apple Neural Engine, Qualcomm AI", "product": "Apple A17 Pro (16‑core NPU), Snapdragon 8 Gen 3 (Hexagon NPU)", "dev": "Apple, Qualcomm" },
                                        { "id": "inf_edge_mcu", "l": "Embedded MCUs & FPGAs", "product": "STM32 (STMicroelectronics), Intel FPGA", "dev": "STMicroelectronics, Intel" },
                                        { "id": "inf_edge_onnx", "l": "ONNX runtime & TFLite", "tool": "ONNX Runtime, TensorFlow Lite", "dev": "Microsoft, Google" },
                                        { "id": "inf_edge_deploy", "l": "Edge deployment optimisation", "tool": "TensorFlow Lite Micro, ExecuTorch (PyTorch Edge)", "dev": "Google, Meta" }
                                    ]
                                },
                                {
                                    "id": "inf_cloud",
                                    "l": "Distributed & cloud compute",
                                    "ch": [
                                        { "id": "inf_cloud_multi_gpu", "l": "Multi‑GPU single‑node training", "hw": "4x/8x NVIDIA A100 or H100", "tool": "NVIDIA NCCL, PyTorch DDP", "dev": "NVIDIA" },
                                        { "id": "inf_cloud_multi_node", "l": "Multi‑node cluster training", "hw": "GPU cluster (hundreds to thousands)", "tool": "Slurm, Kubernetes, Ray", "dev": "N/A" },
                                        { "id": "inf_cloud_services", "l": "AWS, GCP, Azure AI services", "product": "AWS SageMaker, GCP Vertex AI, Azure Machine Learning", "dev": "Amazon, Google, Microsoft" },
                                        { "id": "inf_spot", "l": "Spot instances & preemptible VMs", "hw": "Cloud", "product": "AWS Spot, GCP Preemptible VMs, Azure Spot VMs", "dev": "Amazon, Google, Microsoft" }
                                    ]
                                },
                                { "id": "inf_neuromorphic", "l": "Neuromorphic computing – Intel Loihi", "hw": "Loihi 2 (1M neurons, 120M synapses)", "product": "Intel Loihi 2", "dev": "Intel" },
                                { "id": "inf_quantum", "l": "Quantum computing for ML", "hw": "IBM Quantum (Eagle, Osprey), Google Sycamore", "tool": "Qiskit, Pennylane", "dev": "IBM, Google" }
                            ]
                        },
                        {
                            "id": "inf_frameworks",
                            "l": "Training Frameworks",
                            "ch": [
                                { "id": "inf_pytorch", "l": "PyTorch – dynamic graphs, autograd", "hw": "CPU/GPU (NVIDIA CUDA, AMD ROCm)", "tool": "PyTorch", "dev": "Meta (Facebook AI)" },
                                { "id": "inf_tf", "l": "TensorFlow 2 & Keras", "hw": "CPU/GPU/TPU", "tool": "TensorFlow, Keras", "dev": "Google" },
                                { "id": "inf_jax", "l": "JAX – functional, XLA, vmap/pmap", "hw": "CPU/GPU/TPU", "tool": "JAX, Flax, Optax", "dev": "Google" },
                                { "id": "inf_mxnet", "l": "MXNet", "tool": "Apache MXNet", "dev": "Apache (originally Amazon)" },
                                {
                                    "id": "inf_dist",
                                    "l": "Distributed training",
                                    "ch": [
                                        { "id": "inf_dist_data", "l": "Data parallelism – DDP (PyTorch)", "hw": "Multi‑GPU", "tool": "PyTorch DDP, Horovod", "dev": "Meta, Uber" },
                                        { "id": "inf_dist_model", "l": "Model parallelism – tensor & pipeline", "hw": "Multi‑GPU", "tool": "Megatron‑LM, DeepSpeed", "dev": "NVIDIA, Microsoft" },
                                        { "id": "inf_dist_deepspeed", "l": "DeepSpeed – ZeRO stages (1,2,3)", "hw": "Multi‑GPU", "tool": "DeepSpeed", "dev": "Microsoft" },
                                        { "id": "inf_dist_fsdp", "l": "FSDP – fully sharded data parallel", "hw": "Multi‑GPU", "tool": "PyTorch FSDP", "dev": "Meta" },
                                        { "id": "inf_dist_megatron", "l": "Megatron‑LM – tensor parallelism", "hw": "Multi‑GPU", "tool": "Megatron‑LM", "dev": "NVIDIA" }
                                    ]
                                },
                                { "id": "inf_mixed_precision", "l": "Mixed precision training – FP16, BF16, FP8", "hw": "NVIDIA A100/H100 (Tensor Cores)", "tool": "PyTorch AMP, NVIDIA APEX", "dev": "NVIDIA" },
                                { "id": "inf_checkpoint", "l": "Gradient checkpointing", "hw": "GPU (reduces memory)", "tool": "PyTorch (torch.utils.checkpoint)", "dev": "N/A" },
                                { "id": "inf_compile", "l": "Compilation – torch.compile, XLA", "hw": "CPU/GPU/TPU", "tool": "PyTorch 2.0 (torch.compile), XLA", "dev": "Meta, Google" }
                            ]
                        },
                        {
                            "id": "inf_serving",
                            "l": "Serving & Deployment",
                            "ch": [
                                {
                                    "id": "inf_serving_frameworks",
                                    "l": "Model serving frameworks",
                                    "ch": [
                                        { "id": "inf_serving_torchserve", "l": "TorchServe", "tool": "TorchServe (PyTorch)", "dev": "Meta, AWS" },
                                        { "id": "inf_serving_tf_serving", "l": "TensorFlow Serving", "tool": "TensorFlow Serving", "dev": "Google" },
                                        { "id": "inf_serving_triton", "l": "Triton Inference Server", "tool": "NVIDIA Triton", "dev": "NVIDIA" },
                                        { "id": "inf_serving_vllm", "l": "vLLM – fast LLM serving", "hw": "GPU (8GB+ VRAM)", "tool": "vLLM", "dev": "UC Berkeley (vLLM)" },
                                        { "id": "inf_serving_sglang", "l": "SGLang – structured generation", "tool": "SGLang", "dev": "Stanford" }
                                    ]
                                },
                                {
                                    "id": "inf_optim_inference",
                                    "l": "Optimisation for inference",
                                    "ch": [
                                        { "id": "inf_opt_tensorrt", "l": "TensorRT – NVIDIA optimisation", "hw": "NVIDIA GPU", "tool": "TensorRT, TensorRT‑LLM", "dev": "NVIDIA" },
                                        { "id": "inf_opt_onnx", "l": "ONNX – interoperability format", "tool": "ONNX Runtime", "dev": "Microsoft" },
                                        { "id": "inf_opt_openvino", "l": "OpenVINO – Intel inference", "hw": "Intel CPU, GPU, VPU", "tool": "OpenVINO", "dev": "Intel" },
                                        { "id": "inf_opt_quant", "l": "Quantisation – INT8, INT4, GPTQ, AWQ", "hw": "CPU/GPU", "tool": "bitsandbytes, AutoGPTQ, AWQ", "dev": "Hugging Face, MIT" },
                                        { "id": "inf_opt_prune", "l": "Pruning & sparsity", "tool": "NVIDIA ASP, PyTorch pruning", "dev": "NVIDIA" },
                                        { "id": "inf_opt_spec", "l": "Speculative decoding", "hw": "GPU", "tool": "Hugging Face (speculative decoding), Medusa", "dev": "Google, DeepSpeed" },
                                        { "id": "inf_opt_kv", "l": "KV cache management (PagedAttention)", "tool": "vLLM (PagedAttention)", "dev": "UC Berkeley" }
                                    ]
                                },
                                { "id": "inf_container", "l": "Containerisation – Docker, Kubernetes", "tool": "Docker, Kubernetes, K3s", "dev": "Docker Inc., CNCF" },
                                { "id": "inf_serverless", "l": "Serverless AI deployment", "product": "AWS Lambda, Google Cloud Run, Azure Container Instances", "dev": "Amazon, Google, Microsoft" },
                                { "id": "inf_api", "l": "API design – REST, gRPC, streaming", "tool": "FastAPI, gRPC, WebSockets" }
                            ]
                        },
                        {
                            "id": "inf_mlops",
                            "l": "MLOps Practices",
                            "ch": [
                                { "id": "inf_exp_tracking", "l": "Experiment tracking – MLflow, W&B, Neptune", "product": "MLflow (Databricks), Weights & Biases (W&B), Neptune.ai", "dev": "Databricks, W&B, Neptune" },
                                { "id": "inf_model_registry", "l": "Model versioning & registry", "tool": "MLflow Model Registry, Hugging Face Hub, DVC", "dev": "Databricks, Hugging Face" },
                                { "id": "inf_ci_cd", "l": "CI/CD for ML – GitHub Actions, Jenkins", "tool": "GitHub Actions, GitLab CI, Jenkins, Kubeflow", "dev": "GitHub, GitLab, Jenkins" },
                                { "id": "inf_feature_store", "l": "Feature stores – Feast, Tecton", "product": "Feast (open source), Tecton", "dev": "Tecton (Feast)" },
                                { "id": "inf_data_version", "l": "Data versioning – DVC, LakeFS, Delta Lake", "tool": "DVC (Data Version Control), LakeFS, Delta Lake (Databricks)", "dev": "DVC, Treeverse, Databricks" },
                                { "id": "inf_monitoring", "l": "Model monitoring & drift detection", "tool": "Evidently AI, WhyLabs, Arize AI", "product": "Evidently, WhyLabs", "dev": "Evidently AI, WhyLabs" },
                                { "id": "inf_ab_test", "l": "A/B testing & shadow deployment", "tool": "MLflow, Seldon Core", "dev": "MLflow, Seldon" },
                                { "id": "inf_pipelines", "l": "ML pipelines – Airflow, Kubeflow, ZenML", "tool": "Apache Airflow, Kubeflow, ZenML, Prefect", "dev": "Apache, Google (Kubeflow)" }
                            ]
                        },
                        {
                            "id": "inf_data_eng",
                            "l": "Data Engineering",
                            "ch": [
                                { "id": "inf_data_collect", "l": "Data collection & web scraping", "tool": "Scrapy, BeautifulSoup, Selenium", "dev": "Various" },
                                { "id": "inf_data_labelling", "l": "Data labelling – Labelbox, Scale AI", "product": "Labelbox, Scale AI, Snorkel", "dev": "Labelbox, Scale AI" },
                                {
                                    "id": "inf_data_aug",
                                    "l": "Data augmentation strategies",
                                    "ch": [
                                        { "id": "inf_aug_image", "l": "Image – flips, crops, colour jitter, Mixup", "tool": "Albumentations, torchvision", "dev": "Albumentations team" },
                                        { "id": "inf_aug_text", "l": "Text – back‑translation, synonym swap", "tool": "nlpaug, TextAttack", "dev": "QData" },
                                        { "id": "inf_aug_synthetic", "l": "Synthetic data generation", "tool": "SDV (Synthetic Data Vault), Gretel", "dev": "Synthetic Data Vault, Gretel" },
                                        { "id": "inf_aug_gen", "l": "Generative augmentation", "tool": "Stable Diffusion, LLMs", "dev": "Stability AI, OpenAI" }
                                    ]
                                },
                                { "id": "inf_data_quality", "l": "Dataset curation & quality", "tool": "Cleanlab, Great Expectations", "dev": "Cleanlab, Great Expectations" },
                                { "id": "inf_dedupe", "l": "Data deduplication – MinHash, SimHash", "tool": "datasketch, Dedupe", "dev": "datasketch" },
                                { "id": "inf_spark", "l": "Large‑scale data processing – Spark, Ray", "tool": "Apache Spark, Dask, Ray", "dev": "Apache, UC Berkeley (Ray)" },
                                { "id": "inf_pretrain_data", "l": "Pre‑training datasets – Common Crawl, C4, The Pile", "product": "Common Crawl, C4 (Google), The Pile (EleutherAI)", "dev": "Common Crawl, Google, EleutherAI" }
                            ]
                        },
                        {
                            "id": "inf_vector_db",
                            "l": "Vector Databases & Retrieval",
                            "ch": [
                                {
                                    "id": "inf_ann",
                                    "l": "Approximate nearest neighbour (ANN) algorithms",
                                    "ch": [
                                        { "id": "inf_ann_faiss", "l": "FAISS – Facebook AI similarity search", "hw": "CPU/GPU", "tool": "FAISS (Meta)", "dev": "Meta" },
                                        { "id": "inf_ann_hnsw", "l": "HNSW – hierarchical navigable small world", "tool": "FAISS, hnswlib", "dev": "Yury Malkov" },
                                        { "id": "inf_ann_annoy", "l": "Annoy (Spotify)", "tool": "Annoy", "dev": "Spotify" },
                                        { "id": "inf_ann_scann", "l": "ScaNN (Google)", "tool": "ScaNN", "dev": "Google" }
                                    ]
                                },
                                {
                                    "id": "inf_vector_systems",
                                    "l": "Vector database systems",
                                    "ch": [
                                        { "id": "inf_vec_pinecone", "l": "Pinecone", "product": "Pinecone (fully managed)", "dev": "Pinecone" },
                                        { "id": "inf_vec_weaviate", "l": "Weaviate", "product": "Weaviate (open source)", "dev": "Weaviate B.V." },
                                        { "id": "inf_vec_chroma", "l": "Chroma", "product": "Chroma (embedded)", "dev": "Chroma" },
                                        { "id": "inf_vec_qdrant", "l": "Qdrant", "product": "Qdrant (open source)", "dev": "Qdrant" },
                                        { "id": "inf_vec_milvus", "l": "Milvus / Zilliz", "product": "Milvus (open source), Zilliz Cloud", "dev": "Zilliz" }
                                    ]
                                },
                                { "id": "inf_pgvector", "l": "pgvector – PostgreSQL extension", "tool": "pgvector", "dev": "PostgreSQL community" },
                                { "id": "inf_hybrid_search", "l": "Hybrid search – BM25 + dense", "tool": "Weaviate hybrid search, Vespa", "dev": "Weaviate, Yahoo (Vespa)" },
                                { "id": "inf_embed_models", "l": "Embedding model selection", "product": "OpenAI text‑embedding‑3, Cohere embed, BGE, E5", "dev": "OpenAI, Cohere, BAAI, Microsoft" }
                            ]
                        }
                    ]
                },
                // ─────────────────────────────────────────────────────────
                // 12. APPLICATIONS (by domain)
                // ─────────────────────────────────────────────────────────
                {
                    "id": "app",
                    "c": "app",
                    "l": "AI Applications by Domain",
                    "ch": [
                        {
                            "id": "app_health",
                            "l": "Healthcare & Life Sciences",
                            "ch": [
                                {
                                    "id": "app_health_imaging",
                                    "l": "Medical imaging",
                                    "ch": [
                                        { "id": "app_health_rad", "l": "Radiology – CT, MRI, X‑ray AI", "hw": "GPU (NVIDIA A100 for training)", "product": "Aidoc, Viz.ai, Zebra‑Med", "dev": "Aidoc, Viz.ai" },
                                        { "id": "app_health_path", "l": "Pathology – digital slide analysis", "product": "PathAI, Paige", "dev": "PathAI, Paige" },
                                        { "id": "app_health_derm", "l": "Dermatology – skin lesion detection", "product": "SkinVision, Google Derm", "dev": "Google Health" },
                                        { "id": "app_health_retina", "l": "Ophthalmology – retinal scanning", "product": "IDx‑DR (Digital Diagnostics), Google Retinal", "dev": "Digital Diagnostics, Google" },
                                        { "id": "app_health_us", "l": "Ultrasound & echocardiography AI", "product": "Caption AI (Caption Health), Ultromics", "dev": "Caption Health, Ultromics" }
                                    ]
                                },
                                {
                                    "id": "app_health_drug",
                                    "l": "Drug discovery",
                                    "ch": [
                                        { "id": "app_drug_target", "l": "Target identification", "hw": "GPU (8GB+ VRAM)", "tool": "DeepPurpose, AlphaFold", "dev": "DeepMind, MIT" },
                                        { "id": "app_drug_virtual", "l": "Virtual screening & molecular docking", "tool": "AutoDock, GNINA, DeepDocking", "dev": "Scripps Research" },
                                        { "id": "app_drug_admet", "l": "ADMET property prediction", "tool": "ADMETlab, DeepADMET", "dev": "Various" },
                                        { "id": "app_drug_gen", "l": "De novo molecule generation", "tool": "REINVENT, GraphINVENT, MoLeR", "dev": "Genentech, Merck" },
                                        { "id": "app_drug_clinical", "l": "Clinical trial optimisation", "product": "Deep 6 AI, Unlearn.AI", "dev": "Deep 6 AI, Unlearn" }
                                    ]
                                },
                                {
                                    "id": "app_health_genomics",
                                    "l": "Genomics & precision medicine",
                                    "ch": [
                                        { "id": "app_genomics_variant", "l": "Variant calling & genome analysis", "tool": "DeepVariant (Google), Clair3", "dev": "Google" },
                                        { "id": "app_genomics_gene", "l": "Gene expression analysis", "tool": "scVI, scGen", "dev": "Helmholtz Munich" },
                                        { "id": "app_genomics_prs", "l": "Polygenic risk scores", "tool": "PLINK, PRSice", "dev": "Various" },
                                        { "id": "app_genomics_single", "l": "Single‑cell analysis – scRNA‑seq", "tool": "Scanpy, Seurat, scVI", "dev": "Broad Institute, Helmholtz" }
                                    ]
                                },
                                { "id": "app_health_cds", "l": "Clinical decision support", "product": "IBM Watson Health, Epic Sepsis Model", "dev": "IBM, Epic" },
                                { "id": "app_health_ehr", "l": "Electronic health record (EHR) analysis", "tool": "TensorFlow (EHR models), Google Health", "dev": "Google, Stanford" },
                                { "id": "app_health_mental", "l": "Mental health – NLP for therapy, monitoring", "product": "Woebot, Wysa, Limbic", "dev": "Woebot Health" },
                                { "id": "app_health_surgical", "l": "Surgical robotics – da Vinci, robotic assistance", "product": "da Vinci (Intuitive Surgical), Mako (Stryker)", "dev": "Intuitive Surgical, Stryker" },
                                { "id": "app_health_epidemic", "l": "Pandemic & epidemiology modelling", "tool": "COVID‑19 forecasting (IHME, Google)", "dev": "IHME, Google" },
                                { "id": "app_health_protein", "l": "Protein & structure biology – AlphaFold", "product": "AlphaFold DB (DeepMind)", "dev": "Google DeepMind" }
                            ]
                        },
                        {
                            "id": "app_finance",
                            "l": "Finance & Economics",
                            "ch": [
                                { "id": "app_fin_algo", "l": "Algorithmic & high‑frequency trading", "hw": "GPU (low latency), FPGA", "product": "Virtu Financial, Two Sigma", "dev": "Various hedge funds" },
                                { "id": "app_fin_portfolio", "l": "Portfolio optimisation & robo‑advisors", "product": "Betterment, Wealthfront, Vanguard Personal Advisor", "dev": "Betterment, Wealthfront" },
                                { "id": "app_fin_credit", "l": "Credit scoring & underwriting", "product": "FICO Score, Zest AI, Upstart", "dev": "FICO, Zest AI, Upstart" },
                                { "id": "app_fin_fraud", "l": "Fraud detection & anti‑money laundering", "hw": "GPU (for deep learning)", "tool": "Feedzai, Featurespace, SAS AML", "dev": "Feedzai, Featurespace" },
                                { "id": "app_fin_risk", "l": "Risk management – VaR, stress testing", "tool": "J.P. Morgan Athena, Numerix", "dev": "J.P. Morgan, Numerix" },
                                { "id": "app_fin_reg", "l": "Regulatory compliance (RegTech)", "product": "ComplyAdvantage, Chainalysis", "dev": "ComplyAdvantage, Chainalysis" },
                                { "id": "app_fin_nlp", "l": "NLP for financial news & earnings calls", "tool": "Bloomberg GPT (Bloomberg)", "dev": "Bloomberg" },
                                { "id": "app_fin_insurance", "l": "Insurance – actuarial & claims AI", "product": "Lemonade AI, Shift Technology", "dev": "Lemonade, Shift" },
                                { "id": "app_fin_realestate", "l": "Real estate valuation AI", "product": "Zillow Zestimate, Redfin", "dev": "Zillow, Redfin" },
                                { "id": "app_fin_macro", "l": "Macroeconomic forecasting", "tool": "Federal Reserve models, Google Trends", "dev": "Federal Reserve, Google" }
                            ]
                        },
                        {
                            "id": "app_edu",
                            "l": "Education & Learning",
                            "ch": [
                                { "id": "app_edu_adaptive", "l": "Adaptive & personalised learning systems", "product": "Knewton, DreamBox, Carnegie Learning", "dev": "Knewton, DreamBox" },
                                { "id": "app_edu_tutor", "l": "Intelligent tutoring systems (ITS)", "product": "Cognitive Tutor (Carnegie), ALEKS", "dev": "Carnegie Learning, ALEKS" },
                                { "id": "app_edu_grading", "l": "Automated essay & assessment grading", "product": "Turnitin (Gradescope), ETS e‑rater", "dev": "Turnitin, ETS" },
                                { "id": "app_edu_ta", "l": "AI teaching assistants & tutors", "product": "Jill Watson (Georgia Tech), Khanmigo (Khan Academy)", "dev": "Georgia Tech, Khan Academy" },
                                { "id": "app_edu_analytics", "l": "Learning analytics & early intervention", "tool": "Civitas Learning, BrightBytes", "dev": "Civitas, BrightBytes" },
                                { "id": "app_edu_content", "l": "Content generation & curriculum design", "tool": "GPT‑4, Claude (lesson planning)", "dev": "OpenAI, Anthropic" },
                                { "id": "app_edu_lang", "l": "Language learning – Duolingo AI", "product": "Duolingo (Birdbrain)", "dev": "Duolingo" },
                                { "id": "app_edu_access", "l": "Accessibility & special education AI", "product": "Microsoft Seeing AI, Otter.ai, Glean", "dev": "Microsoft, Otter.ai" }
                            ]
                        },
                        {
                            "id": "app_climate",
                            "l": "Climate & Environment",
                            "ch": [
                                { "id": "app_climate_weather", "l": "Weather forecasting – Pangu‑Weather, GraphCast", "hw": "GPU (A100, TPU)", "product": "Pangu‑Weather (Huawei), GraphCast (Google)", "dev": "Huawei Cloud, Google DeepMind" },
                                { "id": "app_climate_modelling", "l": "Climate change modelling & projections", "tool": "CMIP6, ClimateNet", "dev": "Various (IPCC)" },
                                { "id": "app_climate_disaster", "l": "Wildfire & disaster prediction", "product": "OneConcern, Descartes Labs", "dev": "OneConcern, Descartes Labs" },
                                { "id": "app_climate_biodiversity", "l": "Biodiversity monitoring", "tool": "Wildbook, iNaturalist (computer vision)", "dev": "Wildbook, iNaturalist" },
                                { "id": "app_climate_smartgrid", "l": "Smart grid & energy optimisation", "product": "Google DeepMind (data centre cooling), SmartGrid AI", "dev": "Google DeepMind" },
                                { "id": "app_climate_carbon", "l": "Carbon capture optimisation", "tool": "CarbonCapture AI (various)", "dev": "N/A" },
                                { "id": "app_climate_agri", "l": "Precision agriculture & food security", "product": "John Deere (see & spray), Climate Corporation", "dev": "John Deere, Bayer" },
                                { "id": "app_climate_ocean", "l": "Ocean & atmospheric science", "tool": "ECCO (MIT), Ocean Data Tools", "dev": "MIT, NOAA" }
                            ]
                        },
                        {
                            "id": "app_creative",
                            "l": "Creative Industries",
                            "ch": [
                                { "id": "app_creative_art", "l": "Generative art & AI artists", "product": "DALL‑E, Midjourney, Stable Diffusion", "dev": "OpenAI, Midjourney, Stability AI" },
                                { "id": "app_creative_music", "l": "AI‑assisted music composition & production", "product": "AIVA, MuseNet (OpenAI), Soundraw", "dev": "AIVA, OpenAI" },
                                { "id": "app_creative_film", "l": "AI in film & visual effects", "product": "Runway ML, Topaz Video AI, Wonder Studio", "dev": "Runway, Topaz Labs" },
                                { "id": "app_creative_writing", "l": "AI writing tools & co‑creation", "product": "Sudowrite, Jasper, Grammarly", "dev": "Sudowrite, Jasper" },
                                { "id": "app_creative_game", "l": "Game AI – NPCs, procedural generation", "tool": "Unity ML‑Agents, NVIDIA GameGAN", "dev": "Unity, NVIDIA" },
                                { "id": "app_creative_arch", "l": "Architecture & design generation", "product": "SpaceMaker, Autodesk Generative Design", "dev": "SpaceMaker, Autodesk" },
                                { "id": "app_creative_fashion", "l": "Fashion & product design AI", "product": "Zalando Outfit Generator, CLO 3D", "dev": "Zalando" },
                                { "id": "app_creative_ads", "l": "AI in advertising & marketing", "product": "Persado, Phrasee", "dev": "Persado, Phrasee" }
                            ]
                        },
                        {
                            "id": "app_cyber",
                            "l": "Cybersecurity",
                            "ch": [
                                { "id": "app_cyber_ids", "l": "Intrusion detection & anomaly detection", "hw": "CPU/GPU", "tool": "Snort (AI plugins), Darktrace", "product": "Darktrace", "dev": "Darktrace" },
                                { "id": "app_cyber_malware", "l": "Malware analysis & classification", "tool": "Cuckoo Sandbox (ML), MalConv", "dev": "UC Berkeley (MalConv)" },
                                { "id": "app_cyber_vuln", "l": "Vulnerability scanning & pen testing AI", "product": "DeepArmor, Breach.ai", "dev": "DeepArmor, Breach.ai" },
                                { "id": "app_cyber_threat", "l": "Threat intelligence – NLP for CTI", "tool": "MITRE ATT&CK (NLP), Recorded Future", "dev": "MITRE, Recorded Future" },
                                { "id": "app_cyber_phish", "l": "AI‑powered phishing & social engineering", "tool": "GPT‑4 (abused), Deepfake audio", "dev": "N/A" },
                                { "id": "app_cyber_deepfake", "l": "Deepfake detection", "tool": "Microsoft Video Authenticator, Deepware", "dev": "Microsoft, Deepware" },
                                { "id": "app_cyber_adversarial", "l": "Zero‑day & adversarial AI attacks", "tool": "Adversarial ML (CleverHans)", "dev": "Various" },
                                { "id": "app_cyber_soc", "l": "Security operations centres (SOC) AI", "product": "IBM QRadar (AI), Splunk (ML toolkit)", "dev": "IBM, Splunk" }
                            ]
                        },
                        {
                            "id": "app_business",
                            "l": "Business & Enterprise",
                            "ch": [
                                {
                                    "id": "app_business_recsys",
                                    "l": "Recommendation systems",
                                    "ch": [
                                        { "id": "app_recsys_collab", "l": "Collaborative filtering", "hw": "CPU/GPU", "tool": "Surprise, implicit, NVIDIA Merlin", "dev": "NVIDIA" },
                                        { "id": "app_recsys_content", "l": "Content‑based filtering", "tool": "scikit‑learn, TensorFlow", "dev": "N/A" },
                                        { "id": "app_recsys_hybrid", "l": "Hybrid & neural recommenders", "product": "Amazon Personalize, Google Recommendations AI", "dev": "Amazon, Google" },
                                        { "id": "app_recsys_sequential", "l": "Sequential & session‑based", "tool": "BERT4Rec, GRU4Rec", "dev": "Various" }
                                    ]
                                },
                                { "id": "app_business_customer", "l": "Customer service & support – chatbots, ticket routing", "product": "Zendesk Answer Bot, Intercom Fin", "dev": "Zendesk, Intercom" },
                                { "id": "app_business_supply", "l": "Supply chain & logistics optimisation", "product": "ClearMetal (Project44), Llamasoft (Coupa)", "dev": "Project44, Coupa" },
                                { "id": "app_business_demand", "l": "Demand forecasting", "tool": "Facebook Prophet, Amazon Forecast", "dev": "Facebook, Amazon" },
                                { "id": "app_business_hr", "l": "HR – talent acquisition, churn prediction", "product": "Eightfold AI, HireVue, Gloat", "dev": "Eightfold, HireVue" },
                                { "id": "app_business_legal", "l": "Legal AI – contract analysis, e‑discovery", "product": "Kira Systems, Luminance, Everlaw", "dev": "Kira, Luminance" },
                                { "id": "app_business_doc", "l": "Document processing – IDP, OCR, extraction", "product": "AWS Textract, Google Document AI, Rossum", "dev": "AWS, Google, Rossum" },
                                { "id": "app_business_sales", "l": "Sales intelligence & CRM AI", "product": "Salesforce Einstein, Gong.io, Clari", "dev": "Salesforce, Gong" },
                                { "id": "app_business_marketing", "l": "Marketing optimisation – programmatic, personalisation", "product": "Albert, Marketo AI, HubSpot", "dev": "Albert, Marketo" }
                            ]
                        },
                        {
                            "id": "app_science",
                            "l": "Science & Research",
                            "ch": [
                                { "id": "app_science_materials", "l": "AI for materials discovery – GNoME", "product": "GNoME (Google), MatterGen (Microsoft)", "dev": "Google DeepMind, Microsoft" },
                                { "id": "app_science_fusion", "l": "Nuclear fusion – plasma control", "tool": "DeepMind (TCV tokamak), CFS", "dev": "DeepMind, CFS" },
                                { "id": "app_science_particle", "l": "Particle physics – CERN, event classification", "tool": "CERN (ML for LHC), ATLAS", "dev": "CERN" },
                                { "id": "app_science_astro", "l": "Astronomy & cosmology – LSST, gravitational waves", "tool": "LIGO (ML for gravity waves), LSST", "dev": "LIGO, LSST" },
                                { "id": "app_science_synbio", "l": "Synthetic biology & cell biology", "tool": "CRISPR (ML for guide RNA), DeepCell", "dev": "Broad Institute, DeepCell" },
                                { "id": "app_science_math", "l": "AI‑assisted mathematical proofs – AlphaProof", "product": "AlphaProof (DeepMind), Lean (theorem proving)", "dev": "Google DeepMind" },
                                { "id": "app_science_lit", "l": "Scientific literature mining", "tool": "Scite.ai, Elicit, Semantic Scholar", "dev": "Scite.ai, Elicit, Allen AI" }
                            ]
                        },
                        {
                            "id": "app_gov",
                            "l": "Government & Public Sector",
                            "ch": [
                                { "id": "app_gov_smartcity", "l": "Smart city infrastructure", "product": "Sidewalk Labs (Google), CityBrain (Alibaba)", "dev": "Google, Alibaba" },
                                { "id": "app_gov_health_surv", "l": "Public health surveillance", "tool": "BlueDot (pandemic detection), Metabiota", "dev": "BlueDot, Metabiota" },
                                { "id": "app_gov_social", "l": "Social welfare & benefits allocation AI", "product": "Finland AI (Kela), US HHS (TANF)", "dev": "Various" },
                                { "id": "app_gov_criminal", "l": "Criminal justice – predictive policing debates", "product": "PredPol (Geolitica), COMPAS", "dev": "Geolitica, Equivant" },
                                { "id": "app_gov_military", "l": "Military & defence applications", "product": "Project Maven (US DoD), autonomous drones", "dev": "US Department of Defense" },
                                { "id": "app_gov_border", "l": "Border control & immigration AI", "product": "US CBP (facial recognition), EU EES", "dev": "US CBP, EU" }
                            ]
                        }
                    ]
                },
                // ─────────────────────────────────────────────────────────
                // 13. COGNITIVE AI & AGI
                // ─────────────────────────────────────────────────────────
                {
                    "id": "cog",
                    "c": "cog",
                    "l": "Cognitive AI & AGI",
                    "ch": [
                        {
                            "id": "cog_arch",
                            "l": "Cognitive Architectures",
                            "ch": [
                                { "id": "cog_actr", "l": "ACT‑R (Adaptive Control of Thought)", "hw": "CPU", "tool": "ACT‑R (Lisp/Python)", "dev": "John R. Anderson (Carnegie Mellon)" },
                                { "id": "cog_soar", "l": "SOAR (State, Operator, And Result)", "hw": "CPU", "tool": "Soar (C++/Python)", "dev": "John Laird, Allen Newell (UMich)" },
                                { "id": "cog_sigma", "l": "SIGMA (probabilistic cognitive architecture)", "tool": "SIGMA (C++)", "dev": "Paul Rosenbloom (USC)" },
                                { "id": "cog_clarion", "l": "CLARION (dual‑process theory)", "tool": "CLARION (Python)", "dev": "Ron Sun (RPI)" }
                            ]
                        },
                        {
                            "id": "cog_agi",
                            "l": "Artificial General Intelligence (AGI) & Artificial Superintelligence (ASI)",
                            "ch": [
                                { "id": "cog_agi_def", "l": "Definitions of AGI", "dev": "Ben Goertzel, Shane Legg, DeepMind" },
                                { "id": "cog_agi_milestones", "l": "Milestones & capability thresholds", "dev": "ARC (MIRI), METR (Model Evaluation)" },
                                { "id": "cog_agi_safety", "l": "AGI safety – alignment at the limit", "dev": "DeepMind, OpenAI, Anthropic, MIRI" },
                                { "id": "cog_agi_frameworks", "l": "OpenAI & Anthropic AGI frameworks", "product": "OpenAI (Preparedness Framework), Anthropic (Responsible Scaling)", "dev": "OpenAI, Anthropic" },
                                { "id": "cog_agi_timelines", "l": "Timelines debate – short vs long", "dev": "Eliezer Yudkowsky (MIRI), Ray Kurzweil, OpenAI" },
                                {
                                "id": "cog_asi",
                                "l": "Artificial Superintelligence (ASI)",
                                "ch": [
                                    { "id": "cog_asi_def", "l": "Definition – intelligence vastly exceeding human level in all domains", "dev": "Nick Bostrom (Superintelligence, 2014)" },
                                    { "id": "cog_asi_paths", "l": "Plausible paths to ASI (recursive self‑improvement, whole brain emulation, etc.)", "dev": "Nick Bostrom, Eliezer Yudkowsky" },
                                    { "id": "cog_asi_risks", "l": "Existential risks from ASI (alignment, control, weaponisation)", "dev": "Bostrom, Yudkowsky, Tegmark" },
                                    { "id": "cog_asi_control", "l": "Control problem & corrigibility", "dev": "Stuart Russell, Nick Bostrom" }
                                ]
                                }
                            ]
                        },
                        {
                            "id": "cog_common",
                            "l": "Commonsense & General Reasoning",
                            "ch": [
                                { "id": "cog_common_kb", "l": "Commonsense knowledge – Cyc, ConceptNet", "product": "Cyc (Cycorp), ConceptNet (MIT)", "dev": "Cycorp, MIT Media Lab" },
                                { "id": "cog_common_counter", "l": "Counterfactual reasoning", "hw": "GPU (LLMs)", "tool": "GPT‑4, Gemini (counterfactual prompts)", "dev": "OpenAI, Google" },
                                { "id": "cog_common_analogy", "l": "Analogical reasoning", "tool": "Structure mapping (AnalogySpace)", "dev": "Dedre Gentner (Northwestern)" },
                                { "id": "cog_common_abstract", "l": "Abstract & relational reasoning", "tool": "Raven's Progressive Matrices (PGM), AbstractionNet", "dev": "Various" },
                                { "id": "cog_common_arc", "l": "ARC challenge – abstract reasoning corpus", "hw": "CPU/GPU", "tool": "Kaggle ARC Prize", "dev": "François Chollet (Google)" }
                            ]
                        },
                        {
                            "id": "cog_memory",
                            "l": "Memory & Continual Learning",
                            "ch": [
                                { "id": "cog_memory_working", "l": "Working memory analogues", "tool": "Differentiable working memory (DNC)", "dev": "DeepMind (Graves et al.)" },
                                { "id": "cog_memory_episodic", "l": "Episodic memory in neural networks", "tool": "Memory Networks (Facebook), Episodic Controller", "dev": "Facebook AI, DeepMind" },
                                { "id": "cog_memory_lifelong", "l": "Lifelong learning", "tool": "EWC, GEM, Progressive NNs", "dev": "DeepMind, Uber" },
                                { "id": "cog_memory_ntm", "l": "Neural Turing machines & memory networks", "tool": "Neural Turing Machine (DeepMind), MANN", "dev": "DeepMind" },
                                { "id": "cog_memory_dnc", "l": "Differentiable neural computers (DNC)", "tool": "DNC (DeepMind)", "dev": "DeepMind" }
                            ]
                        },
                        {
                            "id": "cog_conscious",
                            "l": "Consciousness & AI Sentience Debates",
                            "ch": [
                                { "id": "cog_chinese_room", "l": "Chinese Room argument – Searle", "dev": "John Searle (UC Berkeley)" },
                                { "id": "cog_iit", "l": "Integrated information theory (IIT)", "dev": "Giulio Tononi (UW–Madison)" },
                                { "id": "cog_global_workspace", "l": "Global workspace theory", "dev": "Bernard Baars (The Neurosciences Institute)" },
                                { "id": "cog_philosophical_zombie", "l": "Philosophical zombie argument", "dev": "David Chalmers (NYU)" },
                                { "id": "cog_moral_patient", "l": "Moral patienthood of AI systems", "dev": "David Chalmers, Nick Bostrom" }
                            ]
                        },
                        {
                            "id": "cog_human_ai",
                            "l": "Human‑AI Collaboration",
                            "ch": [
                                { "id": "cog_hai_complement", "l": "Complementary intelligence", "dev": "Microsoft Research, Carnegie Mellon" },
                                { "id": "cog_hai_hitl", "l": "Human‑in‑the‑loop systems", "tool": "Human‑in‑the‑loop (active learning), Prodigy", "dev": "Explosion AI" },
                                { "id": "cog_hai_offload", "l": "Cognitive offloading & augmentation", "product": "Microsoft Copilot, Google Gemini", "dev": "Microsoft, Google" },
                                { "id": "cog_hai_trust", "l": "Trust calibration in AI systems", "tool": "Explainable AI (LIME, SHAP)", "dev": "Various" },
                                { "id": "cog_hai_bci", "l": "Brain‑computer interfaces + AI", "product": "Neuralink, Synchron, Kernel", "dev": "Neuralink, Synchron" }
                            ]
                        },

                    ]
                },
                // ─────────────────────────────────────────────────────────
                // 14. FUTURE FRONTIERS
                // ─────────────────────────────────────────────────────────
                {
                    "id": "future",
                    "c": "future",
                    "l": "Future Frontiers & Emerging Areas",
                    "ch": [
                        {
                            "id": "fut_foundation",
                            "l": "Foundation Models & Future Scaling",
                            "ch": [
                                { "id": "fut_moe_extreme", "l": "Mixture of Experts at extreme scale", "hw": "GPU cluster (H100/B100)", "product": "Mixtral 8x22B, GPT-4 (MoE)", "dev": "Mistral AI, OpenAI" },
                                { "id": "fut_test_time", "l": "Test‑time compute scaling – o1, o3 style", "hw": "GPU (inference with extra compute)", "product": "OpenAI o1, o3, Gemini 2.0 Flash Thinking", "dev": "OpenAI, Google" },
                                { "id": "fut_multimodal_fm", "l": "Multimodal foundation models (native)", "hw": "GPU cluster (A100/H100)", "product": "GPT-4o, Gemini 2.0, Claude 3.5", "dev": "OpenAI, Google, Anthropic" },
                                { "id": "fut_world_models", "l": "World models – Genie, JEPA", "hw": "GPU (8GB+ VRAM)", "product": "Genie (Google DeepMind), JEPA (Meta)", "dev": "Google DeepMind, Meta (Yann LeCun)" },
                                { "id": "fut_scaling_limits", "l": "Limits of scaling – data walls", "dev": "Epoch AI, DeepMind (scaling laws)", "product": "N/A" }
                            ]
                        },
                        {
                            "id": "fut_quantum",
                            "l": "AI & Quantum Computing",
                            "ch": [
                                { "id": "fut_qml", "l": "Quantum machine learning (QML)", "hw": "IBM Quantum (Eagle, Osprey), Google Sycamore", "tool": "Pennylane, Qiskit, TensorFlow Quantum", "dev": "IBM, Google, Xanadu" },
                                { "id": "fut_qnn", "l": "Quantum neural networks", "hw": "Quantum hardware", "tool": "Pennylane (QuantumLayer), TorchQuantum", "dev": "Xanadu, MIT" },
                                { "id": "fut_qvqe", "l": "Variational quantum eigensolver (VQE)", "hw": "Quantum hardware", "tool": "Qiskit (VQE)", "dev": "IBM" },
                                { "id": "fut_nisq", "l": "NISQ era algorithms", "hw": "Noisy Intermediate‑Scale Quantum devices", "dev": "John Preskill (Caltech)" }
                            ]
                        },
                        {
                            "id": "fut_neuromorphic",
                            "l": "Neuromorphic & Biological Computing",
                            "ch": [
                                { "id": "fut_snn", "l": "Spiking neural networks for efficiency", "hw": "Intel Loihi, IBM TrueNorth", "tool": "Nengo, SpykeTorch, Lava (Intel)", "dev": "Intel, IBM" },
                                { "id": "fut_loihi", "l": "Intel Loihi, IBM TrueNorth", "product": "Loihi 2 (Intel), TrueNorth (IBM)", "dev": "Intel, IBM" },
                                { "id": "fut_dishbrain", "l": "Biological neural networks in‑vitro (DishBrain)", "product": "DishBrain (Cortical Labs)", "dev": "Cortical Labs" },
                                { "id": "fut_organoid", "l": "Organoid intelligence (OI)", "dev": "Johns Hopkins University (Thomas Hartung)" }
                            ]
                        },
                        {
                            "id": "fut_auto_ai",
                            "l": "AI for Automated AI",
                            "ch": [
                                { "id": "fut_nas", "l": "Neural architecture search (NAS)", "hw": "GPU cluster (search heavy)", "tool": "AutoKeras, NNI (Microsoft), Optuna", "dev": "Google (NASNet), Microsoft" },
                                { "id": "fut_automl", "l": "AutoML – end‑to‑end", "product": "AutoGluon (AWS), H2O Driverless AI, Auto‑sklearn", "dev": "AWS, H2O, scikit‑learn" },
                                { "id": "fut_meta_adapt", "l": "Meta‑learning for fast adaptation", "hw": "GPU", "tool": "MAML, Reptile, FOMAML", "dev": "Chelsea Finn (Stanford)" },
                                { "id": "fut_synth_data", "l": "AI‑generated training data", "hw": "GPU (8GB+ VRAM)", "tool": "Stable Diffusion, GPT‑4 (data generation)", "dev": "Stability AI, OpenAI" },
                                { "id": "fut_self_improve", "l": "Self‑improving AI systems", "dev": "OpenAI (self‑improvement research), DeepMind" },
                                { "id": "fut_ai_scientist", "l": "AI scientists – automated research", "product": "AI Scientist (Sakana AI)", "dev": "Sakana AI (David Ha, Llion Jones)" }
                            ]
                        },
                        {
                            "id": "fut_embodied",
                            "l": "Embodied & Physical AI",
                            "ch": [
                                { "id": "fut_humanoids", "l": "Humanoid robots – Tesla Optimus, Figure", "product": "Tesla Optimus, Figure 01, Atlas", "dev": "Tesla, Figure AI, Boston Dynamics" },
                                { "id": "fut_physical_fm", "l": "Physical AI foundation models", "hw": "GPU cluster", "tool": "RT‑2 (Google), π0 (Physical Intelligence)", "dev": "Google DeepMind, Physical Intelligence" },
                                { "id": "fut_dexterous", "l": "Dexterous manipulation at human level", "product": "Allegro Hand, Shadow Hand", "dev": "Wonik Robotics, Shadow Robot" },
                                { "id": "fut_space", "l": "AI in space exploration", "product": "NASA (Autonomous rovers), SpaceX (autonomous docking)", "dev": "NASA, SpaceX" }
                            ]
                        },
                        {
                            "id": "fut_social",
                            "l": "Social & Collaborative AI",
                            "ch": [
                                { "id": "fut_companions", "l": "AI companions & long‑term relationships", "product": "Replika, Character.AI, Pi", "dev": "Luka, Character.AI, Inflection AI" },
                                { "id": "fut_collective", "l": "Collective intelligence with AI", "tool": "Polis (AI‑mediated deliberation), Meta's collective decision making", "dev": "Stanford (Polis), Meta" },
                                { "id": "fut_democratic", "l": "Democratic AI & participatory design", "dev": "DeepMind (Democratic AI), OpenAI (public input)" },
                                { "id": "fut_conflict", "l": "AI for conflict resolution", "tool": "AI‑mediated negotiation (Google)", "dev": "Google DeepMind" }
                            ]
                        },
                        {
                            "id": "fut_open",
                            "l": "Open Problems & Grand Challenges",
                            "ch": [
                                { "id": "fut_sample_eff", "l": "Sample efficiency – learning from little data", "hw": "CPU/GPU", "tool": "Meta‑learning, self‑supervised learning", "dev": "Various" },
                                { "id": "fut_causal", "l": "Causal understanding – not just correlation", "tool": "Do‑calculus (Pearl), causal discovery", "dev": "Judea Pearl (UCLA)" },
                                { "id": "fut_robust_gen", "l": "Robust generalisation out‑of‑distribution", "hw": "GPU", "tool": "Domain adaptation, OOD detection", "dev": "Various" },
                                { "id": "fut_grounding", "l": "Grounded language understanding", "hw": "GPU", "tool": "LLMs with vision, robotics grounding", "dev": "Stanford, Google" },
                                { "id": "fut_long_horizon", "l": "Long‑horizon planning & reasoning", "tool": "Tree‑of‑thoughts, Monte Carlo tree search", "dev": "Princeton, DeepMind" },
                                { "id": "fut_edge_eff", "l": "Efficient on‑device AI", "hw": "Edge TPU, NPU", "tool": "TensorFlow Lite, ExecuTorch", "dev": "Google, Meta" },
                                { "id": "fut_trustworthy", "l": "Trustworthy & reliable AI at scale", "tool": "Conformal prediction, robust training", "dev": "Various" }
                            ]
                        }
                    ]
                }
            ]
        }];
        // ---- rendering engine (same interactive logic) ----

        // Modal elements
        const modal = document.getElementById('promptModal');
        const modalTopicSpan = document.getElementById('modalTopic');
        const promptTextarea = document.getElementById('promptText');
        const copyBtn = document.getElementById('copyPromptBtn');
        const openDeepSeekBtn = document.getElementById('openDeepSeekBtn');
        const closeSpan = document.querySelector('.close-modal');

        function closeModal() { modal.style.display = 'none'; }

        // Generate step‑by‑step prompt
        function generatePrompt(topic) {
            return `You are an expert AI tutor and software engineer. Teach me "${topic}" in a highly practical, hands‑on way.

            Follow this exact structure (use clear bullet points under each section):

            ## 1. What is ${topic}? (bullet points)
            - Simple definition
            - Real‑world analogy
            - Why it matters in industry

            ## 2. Core Concepts (bullet points)
            - Break down the main ideas
            - Use diagrams described in words

            ## 3. Practical Environment Setup
            - **Local machine:** Which packages/libraries to install (e.g., pip install ...), recommended hardware (if any)
            - **Cloud platform:** Quick start (e.g., Google Colab, Kaggle, AWS SageMaker) – include a link or exact commands

            ## 4. Hands‑on Code Example (Python preferred)
            - Provide a **complete, runnable code block** (with comments)
            - Use realistic data (e.g., a small CSV or built‑in dataset)
            - Show input and expected output

            ## 5. Step‑by‑Step Practice Project
            - A mini‑project (15‑30 minutes) that uses ${topic}
            - Bullet points for each step (data prep → model → evaluation)

            ## 6. Common Pitfalls & Debugging Tips (bullet points)

            ## 7. Resources for Further Learning (free courses, books, YouTube)

            ## 8. Interview Questions (1 or 2)
            - Question 1 + expected answer (concise)
            - Question 2 + expected answer

            Keep explanations clear, beginner‑friendly, and immediately actionable. Use examples.`;
        }

        window.sendPrompt = function(topic) {
        modalTopicSpan.textContent = topic;
        promptTextarea.value = generatePrompt(topic);
        modal.style.display = 'block';
        };

        copyBtn.onclick = async () => {
        await navigator.clipboard.writeText(promptTextarea.value);
        copyBtn.textContent = '✅ Copied!';
        setTimeout(() => copyBtn.textContent = '📋 Copy Prompt', 2000);
        };

        openDeepSeekBtn.onclick = () => {
        window.open('https://chat.deepseek.com/', '_blank');
        };

        closeSpan.onclick = closeModal;
        window.onclick = (event) => { if (event.target === modal) closeModal(); };

        let open = new Set(["root"]);
        let all = [];

        function flat(node, depth = 0) {
        all.push({ ...node, d: depth });
        if (node.ch) node.ch.forEach(child => flat(child, depth + 1));
        }
        flat(T[0]);


        // ========== THEME TOGGLE ==========
        const themeToggleBtn = document.getElementById('themeToggleBtn');
        function setTheme(theme) {
            if (theme === 'dark') {
                document.documentElement.style.setProperty('--bg', '#0f1117');
                document.documentElement.style.setProperty('--bg-secondary', '#1a1e2a');
                document.documentElement.style.setProperty('--bg-tertiary', '#252a39');
                document.documentElement.style.setProperty('--text', '#edeff7');
                document.documentElement.style.setProperty('--text-secondary', '#a5b0c2');
                document.documentElement.style.setProperty('--text-tertiary', '#7e8aa2');
                document.documentElement.style.setProperty('--border', '#334155');
                document.documentElement.style.setProperty('--border-secondary', '#2d3246');
                document.documentElement.style.setProperty('--border-tertiary', '#262c3c');
                if (themeToggleBtn) themeToggleBtn.textContent = '☀️';
            } else {
                document.documentElement.style.setProperty('--bg', '#ffffff');
                document.documentElement.style.setProperty('--bg-secondary', '#f7f8fa');
                document.documentElement.style.setProperty('--bg-tertiary', '#f0f2f5');
                document.documentElement.style.setProperty('--text', '#1a1e2b');
                document.documentElement.style.setProperty('--text-secondary', '#4b5565');
                document.documentElement.style.setProperty('--text-tertiary', '#6c7283');
                document.documentElement.style.setProperty('--border', '#cbd5e1');
                document.documentElement.style.setProperty('--border-secondary', '#e2e8f0');
                document.documentElement.style.setProperty('--border-tertiary', '#e9edf2');
                if (themeToggleBtn) themeToggleBtn.textContent = '🌙';
            }
        }
        const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        setTheme(savedTheme);
        if (themeToggleBtn) {
            themeToggleBtn.addEventListener('click', () => {
                const newTheme = document.documentElement.style.getPropertyValue('--bg').trim() === '#ffffff' ? 'dark' : 'light';
                setTheme(newTheme);
                localStorage.setItem('theme', newTheme);
            });
        }

        // ========== LOGIN BUTTON (placeholder) ==========
        const loginBtn = document.getElementById('loginBtn');
        if (loginBtn) {
            loginBtn.addEventListener('click', () => {
                alert('Login system coming soon. (UI only for now)');
            });
        }

        // ========== CLEAR SEARCH BUTTON ==========
        const searchInput = document.getElementById('q');
        const clearBtn = document.getElementById('clearSearchBtn');
        if (searchInput && clearBtn) {
            searchInput.addEventListener('input', function() {
                clearBtn.style.display = this.value.length > 0 ? 'flex' : 'none';
            });
            clearBtn.addEventListener('click', function() {
                searchInput.value = '';
                searchInput.dispatchEvent(new Event('input'));
                performSearch('');
                searchInput.focus();
            });
        }

        function getColor(id) {
        const n = all.find(x => x.id === id);
        if (!n) return C.root;
        if (n.c && C[n.c]) return C[n.c];
        for (const a of all) if ((a.ch || []).some(c => c.id === id)) return getColor(a.id);
        return C.root;
        }

        function escapeHtml(str) { return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

        function buildTree(node, depth = 0) {
        const isLeaf = !node.ch || node.ch.length === 0;
        const isOpen = open.has(node.id);
        const color = getColor(node.id);

        let extra = '';
        if (node.hw) extra += `<span class="hw-badge" title="Hardware">💻 ${escapeHtml(node.hw)}</span> `;
        if (node.tool) extra += `<span class="tool-badge" title="Tool/Framework">🔧 ${escapeHtml(node.tool)}</span> `;
        if (node.product) extra += `<span class="product-badge" title="Product">🏭 ${escapeHtml(node.product)}</span> `;
        if (node.dev) extra += `<span class="dev-badge" title="Developer">👥 ${escapeHtml(node.dev)}</span> `;

        let html = `<div class="br" id="b-${node.id}">
            <div class="nr d${Math.min(depth, 6)}" id="r-${node.id}" onclick="tog('${node.id}')">
            <span class="tog${isLeaf ? ' leaf' : isOpen ? ' open' : ''}" id="t-${node.id}">${isLeaf ? '·' : '▶'}</span>
            <span class="dot" style="background:${color}"></span>
            <span class="lbl" id="l-${node.id}">${escapeHtml(node.l)}</span>
            ${node.s ? `<span class="sub">${escapeHtml(node.s)}</span>` : ''}
            ${extra ? `<span class="extra-info">${extra}</span>` : ''}
            <button class="abtn" onclick="event.stopPropagation();sendPrompt('${escapeHtml(node.l).replace(/'/g, "\\'")}')">ask ↗</button>
            </div>`;
        if (!isLeaf) {
            const childDepth = Math.min(depth + 1, 6);
            html += `<div class="ch d${childDepth}ch${isOpen ? '' : ' closed'}" id="c-${node.id}">`;
            node.ch.forEach(child => { html += buildTree(child, depth + 1); });
            html += `</div>`;
        }
        return html + `</div>`;
        }

        window.tog = function(id) {
        const cont = document.getElementById('c-' + id);
        const togSpan = document.getElementById('t-' + id);
        if (!cont) return;
        const closed = cont.classList.contains('closed');
        cont.classList.toggle('closed', !closed);
        if (togSpan) togSpan.classList.toggle('open', closed);
        if (closed) open.add(id); else open.delete(id);
        };

        window.expandAll = () => { all.forEach(n => { const c = document.getElementById('c-' + n.id); if (c) { c.classList.remove('closed'); const t = document.getElementById('t-' + n.id); if (t) t.classList.add('open'); open.add(n.id); } }); };
        window.collapseAll = () => { all.forEach(n => { if (n.id === 'root') return; const c = document.getElementById('c-' + n.id); if (c) { c.classList.add('closed'); const t = document.getElementById('t-' + n.id); if (t) t.classList.remove('open'); open.delete(n.id); } }); };
        window.expandDepth = (maxD) => { all.forEach(n => { const c = document.getElementById('c-' + n.id); if (!c) return; if (n.d < maxD) { c.classList.remove('closed'); const t = document.getElementById('t-' + n.id); if (t) t.classList.add('open'); open.add(n.id); } else { c.classList.add('closed'); const t = document.getElementById('t-' + n.id); if (t) t.classList.remove('open'); open.delete(n.id); } }); };

        let searchTimeout = null;
        window.search = (q) => { clearTimeout(searchTimeout); searchTimeout = setTimeout(() => performSearch(q), 130); };
        function highlightText(text, query) { if (!query) return escapeHtml(text); const re = new RegExp('(' + query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi'); return escapeHtml(text).replace(re, '<span class="hl">$1</span>'); }
        function performSearch(q) {
        q = q.trim().toLowerCase();
        if (!q) {
            all.forEach(n => { document.getElementById('b-' + n.id)?.classList.remove('hn'); const lbl = document.getElementById('l-' + n.id); if (lbl) lbl.innerHTML = escapeHtml(n.l); });
            document.getElementById('stats').textContent = '';
            return;
        }
        const hits = new Set(), ancestors = new Set();
        all.forEach(n => { if ((n.l + ' ' + (n.s || '')).toLowerCase().includes(q)) hits.add(n.id); });
        function addAncestors(id) { all.forEach(n => { if ((n.ch || []).some(c => c.id === id) && !ancestors.has(n.id)) { ancestors.add(n.id); addAncestors(n.id); } }); }
        hits.forEach(id => addAncestors(id));
        const visible = new Set([...hits, ...ancestors]);
        all.forEach(n => {
            const box = document.getElementById('b-' + n.id);
            if (!box) return;
            if (visible.has(n.id)) {
            box.classList.remove('hn');
            if (ancestors.has(n.id)) { const c = document.getElementById('c-' + n.id); if (c) { c.classList.remove('closed'); const t = document.getElementById('t-' + n.id); if (t) t.classList.add('open'); } }
            const labelSpan = document.getElementById('l-' + n.id);
            if (labelSpan) labelSpan.innerHTML = highlightText(n.l, q);
            } else box.classList.add('hn');
        });
        document.getElementById('stats').textContent = `${hits.size} match${hits.size !== 1 ? 'es' : ''} for "${q}"`;
        }

        document.getElementById('tree').innerHTML = buildTree(T[0]);
        expandDepth(2);
