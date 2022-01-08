export default function Description() {
    return (
        <div id="problem-description" className="col-md-6 mt-2">
            <div className="description-block">
                <h4>Problem description:</h4>
                <p>
                    Given a linked list of N nodes such that it may contain a loop.
                    A loop here means that the last node of the link list is connected to the node at position X. If the link list does not have any loop, X=0.
                    Remove the loop from the linked list, if it is present.
                </p>
                <h4>Sample input:</h4>
                <p>
                    N = 3, value[] = [1, 3, 4], X = 2
                </p>
                <h4>Sample output: </h4>
                <p>1</p>
            </div>
        </div>
    )
}