from struct import pack
from setuptools import setup, find_packages

with open("../README.md") as fd:
    README = fd.read()


install_requires = [
    "cryptography",
    "Flask",
    "requests",
    "SQLAlchemy"
]

setup(
    name="skillet",
    version="2.0",
    description="A re-imagined take on the web-based meal planner/cookbook.",
    long_description=README,
    author="Adrien Dion, Vadim Flaks",
    url="https://github.com/adion81/skilletReact",
    license="GNU/LGPL",
    packages=find_packages(
        where="src",
        exclude=[]
    ),
    include_package_data=True,
    package_dir={
        "": "src"
    },
    package_data={
        "static": ["../ui"]
    },
    install_requires=install_requires,
    classifiers=["Programming Language :: Python :: 3.10.6"]
)