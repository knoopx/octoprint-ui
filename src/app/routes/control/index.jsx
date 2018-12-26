import React from 'react'
import Button from 'app/components/button'
import {
  MdHome,
  MdArrowUpward,
  MdArrowForward,
  MdArrowDownward,
  MdArrowBack,
} from 'react-icons/md'

export default () => (
  <div className="flex flex-auto justify-center items-center">
    <div className="flex justify-center items-center mr-16">
      <div>
        <Button>
          <MdArrowBack size={36} />
        </Button>
      </div>
      <div>
        <Button>
          <MdArrowUpward size={36} />
        </Button>
        <Button className="m-4">
          <MdHome size={36} />
        </Button>
        <Button>
          <MdArrowDownward size={36} />
        </Button>
      </div>
      <div>
        <Button>
          <MdArrowForward size={36} />
        </Button>
      </div>
    </div>
    <div>
      <Button>
        <MdArrowUpward size={36} />
      </Button>
      <Button className="m-4">
        <MdHome size={36} />
      </Button>
      <Button>
        <MdArrowDownward size={36} />
      </Button>
    </div>
  </div>
)
